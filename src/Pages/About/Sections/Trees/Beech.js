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
            BEECH
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Mature trees grow to a height of more than 40m and develop a huge
              domed crown. The bark is smooth, thin and grey, often with slight
              horizontal etchings. The reddish brown, torpedo-shaped leaf buds
              form on short stalks and have a distinctive criss-cross pattern."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              The beech trees in Wildling Woods are easily spotted in autumn, as
              their leaves turn a gorgeous bright orange color.
            </p>
            <p>Beech can be identified by:</p>
            <ul>
              <li>Oval leaves that finish in a point</li>
              <li>Wavy edged leaves</li>
              <li>Grey bark, often with horizontal etchings</li>
            </ul>
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
                    src="/images/about/trees/istockphoto-1198092337-612x612.jpeg"
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
