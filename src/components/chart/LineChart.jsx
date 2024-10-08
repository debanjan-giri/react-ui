// src/components/LineChart.js

import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    title: {
      text: 'Monthly Sales',
      align: 'center',
    },
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default LineChart;
