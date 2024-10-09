import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";

function LibChart({ title, options, series, type, height }) {
  return (
    <Card className="shadow-sm">
      <p className="mt-2 px-3 mb-0 fw-bold fs-6">
        <span>{title}</span>
      </p>
      <Card.Body className="py-0" id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          width={400}
          height={height || 250}
        />
      </Card.Body>
      <div id="html-dist"></div>
    </Card>
  );
}

export default LibChart;
