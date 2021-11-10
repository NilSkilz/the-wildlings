import Title from "../Text/Title";
import SubTitle from "../Text/Subtitle";
import { Row, Col, Container } from "reactstrap";
import Activity from "../Activity";

/*
Campfires
Den Building
Knots
Whittling
Archery
Arts and Crafts

*/

export default function Activities() {
  return (
    <Container>
      <Row>
        <Col xs={12} style={{ marginTop: "100px" }}>
          <Title>Activities</Title>
          <SubTitle>Explore Activities</SubTitle>
          <Row style={{ marginTop: "20px" }}>
            <Col xs={12} sm={4} lg={2}>
              <Activity title="Campfires" image="images/campfire.png">
                <p>
                  Building fires and cooking your own food is a great way to
                  learn some real life skills. We build campfires nearly every
                  session.
                </p>
                <p>
                  Seeing a child make their first fire is something very
                  special.
                </p>
              </Activity>
            </Col>
            <Col xs={12} sm={4} lg={2}>
              <Activity
                title="Den Building"
                image="images/camp.png"
                description="Learn new skills"
              >
                <p>
                  Den building is a fantastic activity for all ages. You can do
                  it at any time of year, but autumn is an ideal time to try it
                  as there are lots of fallen leaves and branches to use.{" "}
                </p>
                <p>
                  Dens make perfect birdwatching hides, as well as shelters and
                  basecamps for woodland walks. Building a den is also great fun
                  for the whole family and a wonderful way to spend time
                  together, so head outdoors and try out our top tips.
                </p>
              </Activity>
            </Col>
            <Col xs={12} sm={4} lg={2}>
              <Activity
                title="Bushcraft"
                image="images/axe.png"
                description="For kids or adults!"
              >
                <p>
                  Bushcraft courses cover survival training, wilderness and
                  foraging skills.
                </p>
              </Activity>
            </Col>
            <Col xs={12} sm={4} lg={2}>
              <Activity
                title="Archery"
                image="images/archery.png"
                description="For kids or adults!"
              >
                <p>
                  Bushcraft courses cover survival training, wilderness and
                  foraging skills.
                </p>
              </Activity>
            </Col>

            <Col xs={12} sm={4} lg={2}>
              <Activity
                title="Arts and Crafts"
                image="images/porcelain.png"
                description="For kids or adults!"
              >
                <p>
                  Bushcraft courses cover survival training, wilderness and
                  foraging skills.
                </p>
              </Activity>
            </Col>
            <Col xs={12} sm={4} lg={2}>
              <Activity
                title="Assault Course"
                image="images/tightrope-walker.png"
                description="For kids or adults!"
              >
                <p>Slack lines, zip wires, barefoot walks, mud slides etc</p>
              </Activity>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
