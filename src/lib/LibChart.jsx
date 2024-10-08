import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";
import LineChart from "../components/LineChart";
import RadialBarChart from "../components/RadialBarChart";

function LibChart({ type, options, series, height, title }) {


const chartList = {
    line : <LineChart/>,
    radial : <RadialBarChart/>,
    
}

  return (
    <Card className="shadow-sm">
      <div>
        <p>{title}</p>
      </div>
      <Card.Body id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          height={height}
        />
      </Card.Body>
      <div id="html-dist"></div>
    </Card>
  );
}

export default LibChart;
