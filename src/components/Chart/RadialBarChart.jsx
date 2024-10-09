import React from "react";
import LibChart from "./common/LibChart";

const RadialBarChart = ({ title, xaxis, yaxis }) => {
  const chartOptions = {
    series: yaxis || [],
    options: {
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            offsetX: -8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: xaxis || [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <LibChart
      options={chartOptions.options}
      series={chartOptions.series}
      type={"radialBar"}
      title={title}
    />
  );
};

export default React.memo(RadialBarChart);
