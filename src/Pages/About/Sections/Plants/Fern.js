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
            BRACKEN
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Bracken is one of the most widely distributed of all vascular
              plants. It can be found from sea level to more than 3,000 metres
              if the temperatures allow it, on well-drained soils but never on
              marshes or boggy ground. It is a common sight in the British
              countryside in woodland and heathland across a wide range of soils
              and climates."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            {/* <p>
              The beech trees in Wildling Woods are easily spotted in autumn, as
              their leaves turn a gorgeous bright orange color.
            </p>
            <p>Beech can be identified by:</p>
            <ul>
              <li>Oval leaves that finish in a point</li>
              <li>Wavy edged leaves</li>
              <li>Grey bark, often with horizontal etchings</li>
            </ul> */}
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
                    src="/images/about/plants/DqfADXZYN3EZ7qIWr5c2mJtR0jzZr5ZuxXII0opd.jpeg"
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
