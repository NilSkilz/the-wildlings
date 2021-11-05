import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Social from "./Social";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div>
      <Container
        style={{
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Row>
          <Col xs={5}>
            <Social></Social>
          </Col>
          {/* <Col xs={2}>
          <div>aimee@the-wildlings.co.uk</div>
        </Col> */}
          <Col xs={2}>
            <img
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
              src="images/retina-logo.webp"
            />
          </Col>
          <Col xs={5}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
      <img
        style={{ width: "100%", position: "relative", zIndex: 1 }}
        src="images/bg-header-bottom-2.png"
      />
    </div>
  );
}
