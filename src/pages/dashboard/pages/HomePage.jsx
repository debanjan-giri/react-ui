import React from "react";
import ColumnChart from "../../../components/ColumnChart";
import { Col, Row } from "react-bootstrap";
import RadialBarChart from "../../../components/RadialBarChart";
import LineChart from "../../../components/LineChart";

function HomePage() {
  return (
    <div>
      <Row>
        <Col lg={4} md={4} sm={12}>
          <ColumnChart />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <LineChart />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <RadialBarChart />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
