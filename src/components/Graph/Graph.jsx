// Chart.jsx
import React from "react";
import Chart from "react-apexcharts";

import "./style.css";

export const Graph = () => {
  return (
    <Chart
      type="area"
      series={[
        { name: "순위", data: [1, 3,2,5,10,20,1] },
      ]}
      options={{
        theme: { mode: "light" },
        chart: {
          height: 300,
          width: 500,
          toolbar: { show: false },
          background: "transparent",
        },
        stroke: { curve: "smooth", width: 4 },
        markers: {size: 3,},
        dataLabels: {
          enabled: false
        },
        yaxis: {
          reversed: true, 
        },
        // grid: { show: false },
        // yaxis: { show: false },
        // xaxis: {
        //   labels: { show: false },
        //   axisTicks: { show: false },
        //   axisBorder: { show: false },
        //   categories: [1660004640, 1660091040, 1660177440],
        //   type: "datetime",
        // },
        fill: {
          type: "gradient",
          gradient: { 
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 50, 100],
            colorStops: [] },
        },
        colors:['#A76BFF'],
        tooltip: {
          y: { formatter: (value) => `$ ${value.toFixed(2)}` },
        },
      }}
    />
  );
};

