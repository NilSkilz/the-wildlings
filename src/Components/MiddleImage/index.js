import { Parallax } from "react-parallax";

export default function MiddleImage() {
  return (
    <Parallax
      style={{
        height: "600px",
        width: "100%",
        marginTop: "-40px",
        zIndex: "0",
        position: "relative",
      }}
      bgImage="images/scott-webb-obKbq4Z3cuA-unsplash.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "600px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "candal",
            color: "#fff",
            fontSize: "55px",
            fontWeight: "900",
            letterSpacing: "-3px",
            lineHeight: "95px",
          }}
        >
          We can't wait to see you!
        </div>
        <a
          href="/contact"
          style={{
            fontFamily: "Permanent Marker",
            color: "rgb(241, 198, 44)",
            fontSize: "22px",
            backgroundColor: "#f2682a",
            borderRadius: "25px",
            width: "200px",
            height: "50px",
            color: "#fff",
            paddingTop: "7px",
            textDecoration: "none",
          }}
        >
          Get In Touch
        </a>
      </div>
    </Parallax>
  );
}
