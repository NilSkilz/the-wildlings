import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../../../Components/Text/Title";
import SubTitle from "../../../Components/Text/Subtitle";
import { Link } from "react-router-dom";

export default function Campfire() {
  return (
    <Row style={{ marginTop: "60px" }}>
      <Col xs={1}></Col>
      <Col xs={12} md={5}>
        <Title>Campfires</Title>
        {/* <SubTitle>Learn Morex</SubTitle>         */}
        <p>
          It might only be small and short-lived but the moment the spark from
          their strike of the fire steel connects with the cotton wool and the
          first glow of the flames wanders over the white tinder, are moments
          for any child to be very proud of themselves. Fires play a key role in
          Forest School.
        </p>
        <p>
          As the weather takes a turn for the chillier in later months, they not
          only provide much-needed warmth but are also fantastic in terms of
          providing a purposeful educational benefit. Moreover, fires possess a
          capability to fully enchant imaginations, as ethereal smoke and flame
          dance around each other and embers flicker and glow from within.
        </p>
        <Link style={{border:'none', backgroundColor:'transparent'}} to={'/activities/camp-fire'}><SubTitle style={{fontSize: "25px",}}>Read More...</SubTitle></Link>
      </Col>
      <Col xs={12} md={5}>
        <img
          style={{ width: "80%", borderRadius: "20px" }}
          src="/images/leon-contreras-YndHL7gQIJE-unsplash.jpg"
        />
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
