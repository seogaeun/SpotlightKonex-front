// Chart.jsx
import React from "react";
import Chart from "react-apexcharts";

import "./style.css";

export const Graph = ({ dataList, reversed, type }) => {
  // 기본값 설정
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
          name: chartName,
          data: [...dataList],
        },
      ]}
      options={{
        // ... (이전의 옵션들은 그대로 유지)
        tooltip: {
          y: {
            formatter: (value) => formatterText(value), // 변경된 formatter 적용
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
