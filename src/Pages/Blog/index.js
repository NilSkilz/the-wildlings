import React from "react";
import { Container } from "reactstrap";
import Posts from "./Posts";

export default function Blog() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efeeea",
        marginTop: "-50px",
      }}
    >
      {/* <Container> */}
        {Posts.map((Post, index) => {
          if (!index)
            return (
              <div style={{ paddingTop: "50px", backgroundColor: "#efeeea", }}>
                <Post />
              </div>
            );
          return <Post />;
        })}
      {/* </Container> */}
    </div>
  );
}
