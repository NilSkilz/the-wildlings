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
        <div
          style={{
            fontFamily: "Permanent Marker",
            color: "rgb(241, 198, 44)",
            fontSize: "22px",
          }}
        >
          Book Now
        </div>
      </div>
    </Parallax>
  );
}
