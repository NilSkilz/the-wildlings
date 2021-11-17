import React from "react";
import { Container } from "reactstrap";
import Fungus from "./Sections/Fungus";
import Trees from "./Sections/Trees";
import Plants from "./Sections/Plants";
import Birds from "./Sections/Birds";

export default function About() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // backgroundColor: "#efeeea",
        marginTop: "-50px",
      }}
    >
      <div
        style={{
          color: "#000",
          fontFamily: "candal",
          fontSize: "45px",
          paddingTop: "60px",
          backgroundColor: "#efeeea",
          height: "120px",
        }}
      >
        About our woodland
      </div>
      <div
        style={{
          color: "#efc429",
          fontFamily: "permanent marker",
          fontSize: "15px",
          backgroundColor: "#efeeea",
        }}
      >
        Getting to know the woods!
      </div>
      <div style={{ backgroundColor: "#efeeea", marginBottom: "-14px" }}>
        <p>
          This is a brief guide detailing some of the flora and fauna you might
          find at our site and how to identify it.
        </p>
        <p>
          If you want to know more, please visit the reading nook, where you
          will find a range of books.
          <p>
            If you are still stuck, or need an answer you can use an app such as
            "Seek" or "PictureThis"
          </p>
          <p>
            If you find a creature or an animal, please remember not to take it
            away from its habitat. Be quiet and respectful and you might be
            treated to a performance.
          </p>
        </p>
      </div>
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

      <Container>
        <Trees />
        <hr />
        <Plants />
        <hr />
        <Birds />
        <hr />
        <Fungus />
      </Container>
    </div>
  );
}
