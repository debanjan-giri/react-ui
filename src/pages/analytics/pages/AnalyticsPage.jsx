import React from "react";

import { Col, Row } from "react-bootstrap";
import ColumnChart from "../../../components/Chart/ColumnChart";
import RadialBarChart from "../../../components/Chart/RadialBarChart";
import LineChart from "../../../components/Chart/LineChart";

function AnalyticsPage() {
  const LineChartData = {
    yaxis: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    xaxis: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  };

  const columnChartData = {
    yaxis: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    xaxis: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  };

  const RadialBarChartData = {
    yaxis: [44, 55, 67, 83],
    xaxis: ["Direct", "Social", "Referral", "Other"],
  };

  return (
    <div>
      <Row>
        <Col lg={4} md={4} sm={12} className="mb-sm-2">
          <ColumnChart
            yaxis={columnChartData?.yaxis}
            xaxis={columnChartData?.xaxis}
            title="Column Chart"
          />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-sm-2">
          <LineChart
            yaxis={LineChartData?.yaxis}
            xaxis={LineChartData?.xaxis}
            title="Line Chart"
          />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-sm-2">
          <RadialBarChart
            yaxis={RadialBarChartData?.yaxis}
            xaxis={RadialBarChartData?.xaxis}
            title="Radial Bar Chart"
            height={260}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsPage;
