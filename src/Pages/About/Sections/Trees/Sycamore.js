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
                    src="/images/about/trees/sycamore-seeds-naturepl-01570678-sylvain-cordier.jpeg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>{" "}
        <Col xs={12} lg={5}>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            SYCAMORE
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Mature trees can grow up to 15m and live for 300 years. The bark
              is smooth and thin with lots of small, brown 'warts', and the
              stems are dark brown. "
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              Sycamore has really distinctive seeds, that float to the groups
              like helicopters. This is beautiful to watch and they're fun to
              collect and fly!
            </p>
            <ul>
              <li>Helicopter fruit known as Samaras</li>
              <li>Large leaves with an almost "maple" shape</li>
            </ul>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
