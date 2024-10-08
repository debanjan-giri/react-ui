import React from "react";
import LibChart from "./common/LibChart";

const ColumnChart = ({ yaxis, xaxis, title, height }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: xaxis || [],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };

  return (
    <LibChart
      options={chartOptions.options}
      series={chartOptions.series}
      type={"bar"}
      title={title}
      height={height}
    />
  );
};

export default React.memo(ColumnChart);
