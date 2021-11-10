import React from "react";
import { Container, Row, Col } from "reactstrap";
import Social from "./Social";
import Navigation from "./Navigation";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ setSideMenuOpen }) {
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
          <Col className="d-none d-lg-block" xs={0} lg={5}>
            <Social></Social>
          </Col>
          <Col className=" d-block d-lg-none" xs={1} lg={0}>
            <Button
              style={{
                backgroundColor: "transparent",
                borderStyle: "none",
                marginTop: "20px",
              }}
              onClick={() => setSideMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} size="lg" color="black" />
            </Button>
          </Col>
          <Col xs={10} lg={2}>
            <img
              style={{ width: "130px", height: "130px", marginTop: "10px" }}
              src="images/the-wildlings.png"
            />
          </Col>
          <Col className="d-none d-lg-block" lg={5}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
      <img
        style={{
          width: "100%",
          height: "83px",
          position: "relative",
          zIndex: 1,
          objectFit: "cover",
          // marginTop: '-83px'
        }}
        src="images/bg-header-bottom-2.png"
      />
    </div>
  );
}
