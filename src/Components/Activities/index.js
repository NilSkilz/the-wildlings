import Title from "../Text/Title";
import SubTitle from "../Text/Subtitle";
import { Row, Col, Container } from "reactstrap";
import Activity from "../Activity";

export default function Activities() {
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10} style={{ marginTop: "100px" }}>
          <Title>Activities</Title>
          <SubTitle>Explore Activities</SubTitle>
          <Row style={{ marginTop: "20px" }}>
            <Col xs={3}>
              <Activity
                title="Birthday Parties"
                image="images/birthday-cake.png"
              >
                <p>
                  We love celebrating birthdays in the woods! If you are
                  interested in having a Woodland Party to remember, please get
                  in touch!
                </p>
              </Activity>
            </Col>
            <Col xs={3}>
              <Activity
                title="Bushcraft Skills"
                image="images/rope.png"
                description="Learn new skills"
              >
                <p>
                  Bushcraft and Wilderness skills activities for children and
                  training courses for adults.
                </p>
              </Activity>
            </Col>
            <Col xs={3}>
              <Activity
                title="Holiday Clubs"
                image="images/camping-tent.png"
                description="For kids or adults!"
              >
                <p>
                  Our Forest School Holiday Club is for children aged 4-13 and
                  is based in our woodlands in Devon. The club runs in every
                  holiday except Christmas, usually for 3-4 days a week.
                </p>
              </Activity>
            </Col>
            <Col xs={3}>
              <Activity
                title="Holiday Clubs"
                image="images/camping-tent.png"
                description="For kids or adults!"
              />
            </Col>
          </Row>
        </Col>

        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}
