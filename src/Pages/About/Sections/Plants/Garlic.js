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
            WILD GARLIC
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "A delicious sign of the old, wild garlic is also known as
              ramsons. Look for them in shady woods where they coat the woodland
              floor in spring."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Woodland Trust
            </p>
            <p>
              Wild garlic is a small white flowering plant that is easily
              identified becuase it smells (and tastes) like garlic! The entire
              plant is edible and is often unsed as a foreged ingredient
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
                    src="/images/about/plants/wild-garlic.jpeg"
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
