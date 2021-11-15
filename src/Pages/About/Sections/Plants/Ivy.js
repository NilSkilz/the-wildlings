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
                    src="/images/about/plants/drew-dempsey-Kgqjr2CbzuU-unsplash.jpg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Plants</h2>
          <h3 className="blog-date">
            {moment("02/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            IVY
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Ivy is an evergreen, woody climber which can grow to a height of
              30m. It has two different forms – juvenile and mature. It has
              climbing stems with specialised hairs which help it stick to
              surfaces as it climbs. Mature forms can be self-supporting."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              There are a few trees in Wildling Woods that have been wrapped in
              ivy. It does not harm the trees, but instead supports a variety of
              wildlife.
            </p>
            <ul>
              <li>Dark green, glossy leaves</li>
              <li>Often climbs up trees and clings to their limbs</li>
              <li>Can creep along the ground</li>
            </ul>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
