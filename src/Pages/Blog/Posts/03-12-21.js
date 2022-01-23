import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";
import ImgsViewer from "react-images-viewer";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row style={{ marginTop: '60px'}}>
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
                  {/* <ImgsViewer
                    imgs={[{ src: "/images/1280px-Leaf_morphology.svg.png" }]}
                    // currImg={currImg}
                    isOpen={isOpen}
                    // onClickPrev={this.gotoPrevious}
                    // onClickNext={this.gotoNext}
                    onClose={() => setIsOpen(false)}
                  /> */}
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                    }}
                    src="/images/1280px-Leaf_morphology.svg.png"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <h2 className="blog-title">Identifying Leaves</h2>
          <h3 className="blog-date">
            {moment("02/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p style={{ textAlign: "left" }}>
            Here's a cool guide I found on how to identify different leaf types,
            both in terms of shape, veins and edging!
          </p>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
      <Row>
        {/* <hr style={{ margin: "30px" }} /> */}
      </Row>
    </>
  );
}
