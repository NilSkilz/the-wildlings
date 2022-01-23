import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

export default function Post() {
  return (
    <>
      <Row style={{ marginTop: '30px'}}>
        <Col xs={0} lg={1} />

        <Col xs={12} lg={5}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "80%",
                marginTop: "40px",
                borderRadius: "10px",
              }}
            >
              <Row>
                <Col xs={12}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                    }}
                    src="/images/IMG_1308.jpg"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                    }}
                    src="/images/IMG_1322.jpg"
                  />
                </Col>
                <Col xs={6}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                    }}
                    src="/images/IMG_1323.jpg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Getting to know the woods (fungus)</h2>
          <h3 className="blog-date">
            {moment("02/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p style={{ textAlign: "left" }}>
            We want to take some time to get to know the woods - and appreciate
            it in all seasons, so we won't be starting work straight away.
          </p>
          <p style={{ textAlign: "left" }}>
            One of the things we noticed imediately was the different mushroom
            species that inhabited the woods. I took some pictures for this
            blog, and also used a cool app to identify each species.
          </p>
          <p style={{ textAlign: "left" }}>
            I need to do some more research to find out if any are edible, but
            it would be so nice to be able to farm some shrooms for the dinner
            plate one day!
          </p>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
      <Row>
        {/* <hr style={{ margin: "30px" }} /> */}
      </Row>
    </>
  );
}
