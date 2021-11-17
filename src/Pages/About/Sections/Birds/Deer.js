import React from "react";
import { Row, Col } from "reactstrap";

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
                    src="/images/about/birds/rd1a-1180x520.jpeg"
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
            ROE DEER
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Nimble and fleet of foot. The roe is our most widely distributed
              deer, found in woods across the country. Look out for its white
              rump flashing as it acrobatically bounds through the trees."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              We have been lucky enough to see a few Roe Deer visiting our
              woodland. Recognisable by their white rump and no tail, they are
              very skitish, and don't stay around very long once they spot you.
            </p>
          </div>
        </Col>

        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
