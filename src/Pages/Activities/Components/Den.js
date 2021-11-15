import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../../../Components/Text/Title";
import SubTitle from "../../../Components/Text/Subtitle";

export default function Den() {
  return (
    <Row style={{ marginTop: "60px" }}>
      <Col xs={1}></Col>
      <Col xs={12} md={5}>
        <img
          style={{ width: "80%", borderRadius: "20px" }}
          src="/images/siora-photography-K8Uq5ImGPPA-unsplash.jpg"
        />
      </Col>
      <Col xs={12} md={5}>
        <Title>Den Building</Title>
        <SubTitle>We love it!</SubTitle>
        <p>
          Dens make perfect birdwatching hides, as well as shelters and
          basecamps for woodland walks. Building a den is also great fun for the
          whole family and a wonderful way to spend time together, so head
          outdoors and try out our top tips.
        </p>
        <p>
          Den building has lots of benefits for children of all ages. It gets
          little brains thinking creatively and solving problems. It encourages
          youngsters to work together and helps them develop their communication
          skills. Plus, it’s active play that gets kids moving in the fresh air.
          So thumbs up all round!
        </p>
      </Col>

      <Col xs={1}></Col>
    </Row>
  );
}
