import React from "react";
import { Row, Col } from "reactstrap";

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
            TAWNY OWL
          </div>
          <div style={{ textAlign: "left" }}>
            <p>
              It's unusual to see owls in the daytime, but we were lucky enough
              to spot a Tawny Owl while out on a walk in the woods. They're a
              medium sized owl, mostly brown with a paler underbelly.
            </p>
            <p>
              If you see an owl in an English woodland, it's most likely a Tawny
              owl.
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
                    src="/images/about/birds/tawny-owl-howard-stockdale-006556.jpeg"
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
