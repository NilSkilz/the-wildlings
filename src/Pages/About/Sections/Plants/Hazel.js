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
                    src="/images/about/trees/akin-cakiner-jDTgkdzvuDg-unsplash.jpg"
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
            HAZEL
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Hazel is often coppiced, but when left to grow, trees can reach a
              height of 12m and live for up to 80 years (if coppiced, hazel can
              live for several hundred years). It has a smooth, grey-brown,
              bark, which peels with age, and bendy, hairy stems. Leaf buds are
              oval, blunt and hairy."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              There are some large, old hazel trees in Wildlings Woods - which
              have been left to grow. There are also a number of smaller plants
              that have been coppiced. They can be identified by:
            </p>
            <ul>
              <li>Long straight branches</li>
              <li>Distinctive hanging yellow flowers</li>
              <li>Toothed leaves which are oval and pointed</li>
              <li>Nuts are surrounded by a leafy cup</li>
            </ul>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
