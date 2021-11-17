import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

export default function Post() {
  return (
    <>
      <Row>
        <Col xs={0} lg={1} />

        <Col xs={12} lg={5}>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            HOLLY
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Festive, neat and prickly. Holly is a well-loved shrub that
              shelters birds and gives hedgehogs a cosy place to hibernate."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              Holly is famous for it's festive appearance. It's evergreen leaves
              and red berries add some colour to the woodlands in winter. It's
              glossy, dark green leaves usually carry a spiked edge, however
              they can be found with rounded leaves too.
            </p>
          </div>
        </Col>
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
                    src="/images/about/trees/thomas-millot-OW-RNMS3hdA-unsplash.jpg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
