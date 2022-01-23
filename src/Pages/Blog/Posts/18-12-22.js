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
          <h2 className="blog-title">Knots</h2>
          <h3 className="blog-date">
            {moment("18/01/2022", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p style={{ textAlign: "left" }}>
           Learning to tie knots is an essential skill for budding wildlings. 
           Whether it's for building shelters, securing items or even for climbing, 
           knowing which knot to use in the correct situation can be really important.
          </p>
          <p style={{ textAlign: "left" }}>
           We find the best way to learn knot tieing is by practise, and by putting the knots into context. 
           Learning to tie specific knots is just the first step. 
           You must also learn which knot is appropriate for each use-case. 
           And with most things, repetition is key when learning to tie knots.
          </p>
          <p style={{ textAlign: "left" }}>
           Here's a few knots we use all the time, and some examples of where they can really shine:
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left", fontSize: '28px', marginBottom: '10px'}}>Den Building</p>
          <p style={{fontWeight: 900, textAlign: "left"}}>Midshipman's Hitch</p>
          <p style={{ textAlign: "left" }}>
           The Midshipman's Hitch is a great knot for creating a tensioned line. 
           We teach and practise this knot every time we make a shelter using a tarp.
           <br/>
           <br/>
           By tieing a cord between two trees we can make a taught line over which to hang a tarp sheet, 
           making a quick and easy shelter.
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left"}}>Round turn and two half hitches</p>
          <p style={{ textAlign: "left" }}>
           Another useful knot we teach when building a shelter like this is the "Round Turn and two half hitches".
           It's really useful for securing corner lines from our shelter tarps, and will not slip under load.
           It's also really easy to untie, and additional half hitches can be added to use up more cord, to avoid tripping hazards
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left", fontSize: '28px', marginBottom: '10px'}}>General use knots</p>
          <p style={{fontWeight: 900, textAlign: "left"}}>Clove Hitch</p>
          <p style={{ textAlign: "left" }}>
           The clove hitch is a really simple knot to teach, especially children. 
           It's not a knot to be used for anything that requires strength, 
           as it can slip under load, however it's very easy to tie and simple to loosen to adjust the tension.
          </p>
          <br/>
          <p style={{fontWeight: 900, textAlign: "left", fontSize: '28px', marginBottom: '10px'}}>Tips for learning knots</p>
          <ul>
            <li style={{ textAlign: "left" }}>
              Repetition is key: Keep practising by repeatedly tying the knots during the session. Also refresh your skills on a regular basis by practising the knots regually.
            </li>
            <li style={{ textAlign: "left" }}>
              Get some practise rope: Get yourself some long lengths of rope to practise with at home. A few lengths at different thicknesses can also be helpful. It can also help if you have a few different colours.
            </li> 
            <li style={{ textAlign: "left" }}>
              Learn the stories: Some knots have "stories" - descriptive ways to remember the sequence for tieing the knot. It can be helpful and fun to learn these!
              <ul>
                <li>Bowline: A field mouse comes out of its hole, runs around the tree, and then goes back down the hole.</li>
                <li>Clove Hitch: The Fish (one loop) was put on a dish (second loop). You then slide the piled fish on a dish onto the end of the stave. </li>
              </ul>
            </li> 
          </ul>
          <p style={{fontWeight: 900, textAlign: "left", fontSize: '28px', marginBottom: '10px'}}>Knot resources</p>
          <ul>
            <li style={{ textAlign: "left" }}>
              <a href="https://www.animatedknots.com/" target='_blank'>Animated Knots</a>
            </li>
            <li style={{ textAlign: "left" }}>
              <a href="https://www.netknots.com/rope_knots" target='_blank'>NetKnots</a>
            </li>
          </ul>
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
                    src="https://img.ifunny.co/images/df62d35cd98df7c9046ea159445cd9421eae4bb6cf68750555d252c730f0c818_1.webp"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
      <Row>
        <hr style={{ margin: "30px" }} />
      </Row>
    </>
  );
}
