import React, { useEffect, useState } from "react";
import axios from "axios";
import MarkdownView from "react-showdown";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data/01.json").then(({ data }) => {
      console.log("data:", data);
      setData(data);
    });
  }, []);

  const getPost = (post) => {
    return (
      <>
        <h2 className="blog-title">{post.title}</h2>
        <h3 className="blog-date">
          {moment(post.date, "DD/MM/YYYY").format("MMM Do, yyyy")}
        </h3>
        <MarkdownView markdown={post.post} />
      </>
    );
  };

  const getImage = (post) => {
    return (
      <div
        style={{
          width: "100%",
          paddingLeft: post.layout === "right" ? "" : "70px",
          paddingRight: post.layout === "right" ? "70px" : "",
          marginTop: "70px",
          borderRadius: "10px",
        }}
      >
        <img style={{ width: "100%", borderRadius: "10px" }} src={post.image} />
      </div>
    );
  };

  return (
    <>
      {data.map((post) => {
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#efeeea",
              marginTop: "-30px",
            }}
          >
            <div style={{ paddingTop: "60px" }}>
              <Container>
                <Row>
                  <Col xs={1} />
                  <Col xs={5}>
                    {post.layout === "left" ? getPost(post) : getImage(post)}
                  </Col>
                  <Col xs={5}>
                    {post.layout === "left" ? getImage(post) : getPost(post)}
                  </Col>
                  <Col xs={1} />
                </Row>
                <Row>
                  <hr style={{ margin: "30px" }} />
                </Row>
              </Container>
            </div>
          </div>
        );
      })}
    </>
  );
}
