import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

export default function Post() {
  return (
    <>
      <Row >
        <Col xs={1} lg={1} />
        <Col xs={10} lg={5}>
          <h2 className="blog-title">We bought a wood!</h2>
          <h3 className="blog-date">
            {moment("01/12/2021", "DD/MM/YYYY").format("MMM Do, yyyy")}
          </h3>
          <p style={{ textAlign: "left" }}>
            Since we moved to Cornwall, seven years ago, we've always wanted a
            piece of land to call our own. Somewhere to camp, somewhere for the
            kids to play without any rules, where we could light a fire, or
            sleep under the stars, with no-one telling us what wasn't allowed.
            Total freedom!
          </p>
          <p style={{ textAlign: "left" }}>
            This year, after a few months of searching and visiting a few lots,
            we finally found our perfect getaway. A small meadow with ajoining
            woodland, about 3 acres in all, in the heart of Devon. Just close
            enough to visit regually, but far enough away that it feels like a
            break.
          </p>
          <p style={{ textAlign: "left" }}>
            We were a bit dubious about what our family would think - it's a lot
            of money to spend on such a strange thing, but they were all (with a
            few minor exceptions) really supportive. I think that by now, most
            of our friends and family are used to our 'wild' way of life, with
            ferel children and untrained dogs. I think it came as no suprise
            that we were drawn to the call of the wild.
          </p>
          <p style={{ textAlign: "left" }}>
            Aimee had run a couple of days of holiday club this year, doing
            Forest School with the kids for the entire day. It was a roaring
            success with kids loving their time, and adults grateful for the
            childcare. We thought it only fair that we think about offering the
            same sort of thing, but on our own terms, in our own woods. Thus
            'The Wildlings' was born. We're hopeing to get a Forest School up
            and running over the next few months so that in summer we can start
            offering a few places for kids to spend a few days in the holiday -
            learning about nature, the environment, and learning some really
            useful skills; like fire lighting, and making shelters.
          </p>
          <p style={{ textAlign: "left" }}>
            We thought we'd try and document our progress, and thought it would
            be fun to keep a virtual scrapbook of our time...
          </p>
          <p style={{ textAlign: "left" }}>So look out for some more posts!</p>
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
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="/images/alex-grodkiewicz-8YR0yLTVGlI-unsplash.jpg"
              />
            </div>
          </div>
        </Col>
        <Col xs={0} lg={1} />
      </Row>
      <Row style={{marginTop: '40px'}}>
        <hr style={{ margin: "0px" }} />
      </Row>
    </>
  );
}
