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
            AGARICACEAE
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "The best known family, Agaricaceae, contains fungi with mushroom
              fruiting bodies as well as many of the puffballs formerly placed
              in the family Lycoperdaceae. The taxonomy of the group has
              undergone heavy revision and contains about 85 genera and 1,340
              species."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Britanica
            </p>
            <p>
              These mushrooms look very similar to the white mushrooms you buy
              at the supermarket, and I believe these are in the same genus.
            </p>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "80%",

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
                      height: "40%",
                      objectFit: "cover",
                    }}
                    src="/images/IMG_1323.jpg"
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
