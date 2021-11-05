import React from "react";
import ContactForm from "../../Components/ContactForm";
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
          height: "100%",
          backgroundColor: "#efeeea",
          marginTop: "-30px",
        }}
      >
        <ContactForm />
        {/* </div>
      <div
        style={{
          width: "100%",
          marginTop: "-30px",
        }}
      >
        <img
          style={{
            width: "100%",
            position: "relative",
            zIndex: 1,
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
            position: "relative",
            zIndex: 1,
          }}
          src="images/bg-heading.png"
        />
      </div>
      <Map /> */}
      </div>
    </>
  );
}
