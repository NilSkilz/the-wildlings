import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../../../Components/Text/Title";
import SubTitle from "../../../Components/Text/Subtitle";

export default function Arts() {
  return (
    <Row style={{ marginTop: "60px" }}>
      <Col xs={1}></Col>
      <Col xs={12} md={5}>
        <img
          style={{ width: "80%", borderRadius: "20px" }}
          src="images/alex-jones-Tq4YjCa2BSc-unsplash.jpg"
        />
      </Col>
      <Col xs={12} md={5}>
        <Title>Arts & Crafts</Title>
        <SubTitle>We love it!</SubTitle>
        <p>TBD</p>
      </Col>

      <Col xs={1}></Col>
    </Row>
  );
}
