import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

export default function Post() {
  return (
    <>
      <Row>
        <Col xs={0} lg={1} />

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
            PERIWINKLE
          </div>
          <div style={{ textAlign: "left" }}>
            <p>
              We have a host of Periwinkle growing in our woodlands. It covers
              the floor with an evergreen leaf which really helps the wood feel
              alive over winter.
            </p>
            <p>
              When the Periwinkle blooms, it's flowers are a distincitve violet
              hue - from which the color "periwinkle" is derived
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
                    src="/images/about/plants/periwinkle.jpeg"
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
