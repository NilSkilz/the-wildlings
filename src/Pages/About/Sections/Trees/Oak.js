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
                    src="/images/about/trees/denny-muller-cRUQP9hWnac-unsplash.jpg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Trees</h2>
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
            ENGLISH OAK
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "A large, deciduous tree growing up to 20–40m tall. Also known as
              common oak, this species grows and matures to form a broad and
              spreading crown with sturdy branches beneath."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>Oaks can be identified by:</p>
            <ul>
              <li>Distinctive lobed leaf shape</li>
              <li>Acorns</li>
            </ul>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
