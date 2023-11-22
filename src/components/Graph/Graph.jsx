// Chart.jsx
import React from "react";
import Chart from "react-apexcharts";

import "./style.css";

export const Graph = ({ dataList, reversed, type }) => {
  let chartName = "순위";
  let formatterText = (value) => ` ${parseInt(value.toFixed(2))} 등`;

  // type에 따라 이름과 formatter 설정 변경
  if (type === "cheer") {
    chartName = "응원수";
    formatterText = (value) => ` ${parseInt(value.toFixed(2))} ❤️`;
  } else if (type === "trans") {
    chartName = "거래량";
    formatterText = (value) => ` ${parseInt(value.toFixed(2))} 주`;
  }

  return (
    <Chart
      type="area"
      series={[
        {
          name: { chartName },
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
          reversed: reversed,
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
            formatter: `${formatterText}`,
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
