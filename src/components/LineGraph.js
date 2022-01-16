import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

// https://disease.sh/v3/covid-19/historical/all?lastdays=120

function LineGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;
    data[casesType].forEach((date) => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    });
    return chartData;
  };

  return (
    <div>
      <h1>I am a graph</h1>
      {/* <Line data options /> */}
    </div>
  );
}

export default LineGraph;
