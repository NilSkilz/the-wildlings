import React from "react";
// import Activities from "../../Components/Activities";
// import Campfire from "./Components/Campfire";
// import Bushcraft from "./Components/Bushcraft";
// import Arts from "./Components/Arts";
// import Den from "./Components/Den";
// import Assault from "./Components/Assault";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#efeeea",
          marginTop: "-30px",
        }}
      >
        {/* <Activities /> */}
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "-30px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "141px",
            position: "relative",
            zIndex: 1,
            objectFit: "cover",
          }}
          src="/images/bg-gray-top-home-3.png"
        />
      </div>
      <Container>
        {/* <Campfire />
        <hr />
        <Den />
        <hr />
        <Bushcraft />
        <hr />
        <Arts />

        <hr />
        <Assault />
        <hr /> */}
      </Container>
    </>
  );
}
