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
                      marginTop: "120px",
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                      height: "40%",
                      objectFit: "cover",
                    }}
                    src="/images/IMG_1308.jpg"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Fungi</h2>
          <h3 className="blog-date">
            {moment("02/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p>
            We have no real experience in identifying fungus, so it was fun to
            explore our woodland and identify a few of the species living there
          </p>
          <div
            style={{
              textAlign: "left",
              color: "#000",
              fontFamily: "permanent marker",
              fontSize: "25px",
            }}
          >
            HYPOXYLACEAE
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "16px", color: "#666" }}>
              "Hypoxylon is a genus of ascomycetes commonly found on dead wood,
              and usually one of the earliest species to colonise dead wood. A
              common European species is Hypoxylon fragiforme which is
              particular common on dead trunks of beech.."
            </p>
            <p style={{ textAlign: "right", fontSize: "16px", color: "#666" }}>
              - Wikipedia
            </p>
            <p>
              We managed to identify some Hypoxylon growing on a dead tree in
              our forest. They took the form of a fairly solid dark-brown/black
              lump, and were identified using an app called "PictureThis"
            </p>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
    </>
  );
}
