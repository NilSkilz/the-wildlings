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
                    src="/images/about/plants/p18ka272m1q7s1j15ce1kst1cvbc.jpeg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            SWAN'S-NECK THYME MOSS
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Elegant and damp. Swan's-neck thyme-moss is one of our most
              common mosses. Lush green with bright green new growth in the
              spring."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              We think we've identified some Swan's Neck moss in our woodlands.
              Moss, like Fungus has thousands of sub-species and so identifying
              specific types can be tough.
            </p>
            <p>
              Swan's Neck moss has fern like, soft leaves. Moss likes damp
              conditions, and so tends to grow on the North side of trees in the
              UK (as there's less sunlight). As such, it can be used as a rough
              guide for navigation.
            </p>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
