import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../../../Components/Text/Title";
import SubTitle from "../../../Components/Text/Subtitle";

export default function Bushcraft() {
  return (
    <Row style={{ marginTop: "60px" }}>
      <Col xs={1}></Col>
      <Col xs={12} md={5}>
        <Title>Bushcraft</Title>
        <SubTitle>We love it!</SubTitle>
        <p>
          Bushcraft is also about being able to survive in the outdoors with the
          bare minimum; to live off the land; to use natural resources in a
          responsible and sustainable manner. But then, what is the difference
          between bushcraft and survival skills? I think that will need another
          post!
        </p>
        <p>
          Bushcraft is not always about survival. Sometimes it is just about
          enjoying the outdoors and making use of natural resources.
        </p>
      </Col>
      <Col xs={12} md={5}>
        <img
          style={{ width: "80%", borderRadius: "20px" }}
          src="/images/gemma-evans-alVcL70NHUU-unsplash.jpg"
        />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
