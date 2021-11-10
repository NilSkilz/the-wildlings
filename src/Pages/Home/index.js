import React from "react";
import Introduction from "../../Components/Introduction";
import Activities from "../../Components/Activities";
import TopImage from "../../Components/TopImage";
import MiddleImage from "../../Components/MiddleImage";
import Map from "../../Components/Map";

export default function Home() {
  return (
    <>
      <TopImage />
      <img
        style={{
          width: "100%",
          height: "99px",
          position: "relative",
          zIndex: 1,
          objectFit: "cover",
          marginTop: "-99px",
        }}
        src="images/bg-band-home-3.png"
      />
      <Introduction />
      <img
        style={{
          width: "100%",
          height: "83px",
          position: "relative",
          zIndex: 1,
          objectFit: "cover",
          marginTop: "0px",
        }}
        src="images/bg-header-bottom-2.png"
      />

      <div
        style={{
          width: "100%",
          backgroundColor: "#efeeea",
          marginTop: "-83px",
        }}
      >
        <Activities />
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
          src="images/bg-gray-top-home-3.png"
        />
      </div>

      <MiddleImage />

      <div
        style={{
          width: "100%",
          marginTop: "-40px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "286px",
            position: "relative",
            zIndex: 1,
            objectFit: "cover",
          }}
          src="images/bg-heading.png"
        />
      </div>
      <Map />
    </>
  );
}
