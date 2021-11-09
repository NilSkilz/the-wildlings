import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

export default function Post() {
  return (
    <>
      <Row>
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
          <p style={{ textAlign: "left" }}>SHROOMS!</p>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
      <Row>
        <hr style={{ margin: "30px" }} />
      </Row>
    </>
  );
}
