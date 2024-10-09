import React from "react";
import LibChart from "./common/LibChart";

const LineChart = ({ yaxis, xaxis, title }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: xaxis || [],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <LibChart
      options={chartOptions?.options}
      series={chartOptions?.series}
      type={"area"}
      title={title}
    />
  );
};

export default React.memo(LineChart);
