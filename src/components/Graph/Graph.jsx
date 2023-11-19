// Chart.jsx
import React from "react";
import Chart from "react-apexcharts";

import "./style.css";

export const Graph = ({ dataList }) => {
  return (
    <Chart
      type="area"
      series={[
        {
          name: "순위",
          data: [...dataList],
        },
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
        markers: { size: 3 },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          reversed: true,
        },
        xaxis: {
          type: "datetime", // x-축의 타입을 datetime으로 설정
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },
        colors: ["#A76BFF"],
        tooltip: {
          y: {
            formatter: (value) => ` ${parseInt(value.toFixed(2))} 등 `,
          },
          x: {
            formatter: function (value) {
              const options = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              return new Date(value).toLocaleDateString("ko-KR", options);
            },
          },
        },
      }}
    />
  );
};
