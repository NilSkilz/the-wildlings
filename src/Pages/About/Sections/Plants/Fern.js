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
              marshes or boggy ground."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              Bracken is very common in the English countryside. It's easily
              recognisable by it's large, fern-like leaves. It can grow to 5ft
              in height and can spread rapidly if left unchecked.
            </p>
            <p>
              Bracken provides a lovely green carpet in summer and spring, which
              turns to a red-brown and dies back over autumn.
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
