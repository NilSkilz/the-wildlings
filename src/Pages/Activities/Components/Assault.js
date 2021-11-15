import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../../../Components/Text/Title";
import SubTitle from "../../../Components/Text/Subtitle";

export default function Assault() {
  return (
    <Row style={{ marginTop: "60px" }}>
      <Col xs={1}></Col>
      <Col xs={12} md={5}>
        <Title>Assault Course</Title>
        <SubTitle>We love it!</SubTitle>
        <p>TBD</p>
      </Col>
      <Col xs={12} md={5}>
        <img
          style={{ width: "80%", borderRadius: "20px" }}
          src="/images/henry-perks-2pvagQuV2bM-unsplash.jpg"
        />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
