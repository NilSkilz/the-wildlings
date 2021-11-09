import React from "react";
import { Container } from "reactstrap";
import Posts from "./Posts";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#efeeea",
        marginTop: "-50px",
      }}
    >
      <Container>
        {Posts.map((Post, index) => {
          if (!index)
            return (
              <div style={{ paddingTop: "50px" }}>
                <Post />
              </div>
            );
          return <Post />;
        })}
      </Container>
    </div>
  );
}
