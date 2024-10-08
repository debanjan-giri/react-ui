import React from "react";
import LineChart from "../../../components/chart/LineChart";
import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <LineChart />
        </Col><Col lg={6} md={6} sm={12}>
          <LineChart />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
