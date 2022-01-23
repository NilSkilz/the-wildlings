import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

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
                    imgs={[{ src: "https://img.ifunny.co/images/df62d35cd98df7c9046ea159445cd9421eae4bb6cf68750555d252c730f0c818_1.webp" }]}
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
                    src="/images/markus-spiske-1S0-pHmQ-TY-unsplash.jpg"
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
          <h2 className="blog-title">Den Building</h2>
          <h3 className="blog-date">
            {moment("18/01/2022", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p style={{ textAlign: "left" }}>
           Building dens can be great fun for all ages. It can be done at any time of year,
           although we love building dens in the Autumn when there are lots of fallen leaves and
           branches to use. 
          </p>
          <p style={{ textAlign: "left" }}>
           They can be used for a variety of reasons - as a temporary shelter from the weather, as a store 
           for some of your woodland items, or even as a bird or wildlife hide.
          </p>
          <p style={{ textAlign: "left" }}>
           We've got everything you need to build a shelter in our woodlands. There are many fallen branches
           to make a simple "lean to" den. Or for those more adventerous or who want something a littl more sheltered,
           we have rope and tarps to construct something a little more weather-proof.
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left", fontSize: '28px', marginBottom: '10px'}}>Types of Dens</p>
          <p style={{fontWeight: 900, textAlign: "left"}}>Teepee den</p>
          <p style={{ textAlign: "left" }}>
            <ul>
                <li>
                    Find a tree with a fork in the branches that's quite low down.
                </li>
                <li>
                    Make a frame by propping some long, straight sticks in the fork and fanning them out. Also make sure that any branches are really secure - you don't want them slipping.
                </li>
                <li>
                    Weave bendy sticks in and out of the upright sticks to make the walls. Leave a gap at head height for a window.
                </li>
                <li>
                    Cover your den with natural materials so it's camouflaged and weatherproof. You could use mud to stick them on.
                </li>
                <li>
                    Scatter a carpet of dried leaves on the floor to make your den extra cosy.
                </li>
            </ul>
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left"}}>Tent den</p>
          <p style={{ textAlign: "left" }}>
            <ul>
                <li>
                    Find two forked trees that are close together and place a long stick between them.
                </li>
                <li>
                    Prop a row of sticks against it on each side so you end up with a tent shape.
                </li>
                <li>
                    Weave your bendy sticks in and out of the upright and add your plant materials.
                </li>
            </ul>
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
