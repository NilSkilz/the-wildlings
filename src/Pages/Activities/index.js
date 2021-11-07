import React from "react";
import Introduction from "../../Components/Introduction";
import Activities from "../../Components/Activities";
import TopImage from "../../Components/TopImage";
import MiddleImage from "../../Components/MiddleImage";
import Map from "../../Components/Map";

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
        <Activities />
      </div>
    </>
  );
}
