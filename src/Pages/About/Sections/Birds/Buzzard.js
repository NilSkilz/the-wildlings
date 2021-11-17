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
                    src="/images/about/birds/105002532-ccfa100e-808c-4ed9-9180-28245eb0a1ec.jpeg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Wildlife</h2>
          <h3 className="blog-date">
            {moment("02/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <div>
            My husband Rob has a keen interest in Birds of Prey, and was
            delighted to see a few species that visit our woodland
          </div>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            Buzzard
          </div>
          <div style={{ textAlign: "left" }}>
            <p>
              The European Buzzard is really common across Devon and Cornwall
              and can often be spotted soaring over fields, meadows and
              woodlands, or perched atop telegraph poles
            </p>
            <p>
              They have broad wings and short tails, and are a light brown color
              with darker tips on thier wings.
            </p>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
