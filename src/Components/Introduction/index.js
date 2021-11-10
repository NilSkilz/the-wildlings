import Title from "../Text/Title";
import SubTitle from "../Text/Subtitle";
import { Row, Col, Container } from "reactstrap";

export default function Introduction() {
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={12} md={5}>
          <Title>About our Forest School</Title>
          <SubTitle>We love it!</SubTitle>
          <p>
            Nestled in the Devon countryside, our Forest School spans 3 acres of
            beautiful woodland and wild meadow.
          </p>
          <p>
            We are passionate about hands on learning, giving time to explore,
            experiment, take risks, work as a team, taking part in team
            challenges as well as individual. We allow time for children to take
            part in child-initiated play and learning to encourage decision
            making and promote positive wellbeing.
          </p>
        </Col>
        <Col xs={12} md={5}>
          <img style={{ width: "100%" }} src="images/bg-14-copyright-2.jpeg" />
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}
