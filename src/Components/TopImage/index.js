import { Parallax } from "react-parallax";

export default function TopImage() {
  return (
    <Parallax
      style={{
        height: "600px",
        width: "100%",
        marginTop: "-83px",
        zIndex: "0",
        position: "relative",
      }}
      bgImage="images/markus-spiske-F9FFiYu8tIA-unsplash.jpg"
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
            fontSize: "80px",
            fontWeight: "900",
            letterSpacing: "-3px",
            lineHeight: "95px",
          }}
        >
          Choose Your Own Adventure!
        </div>
        <div
          style={{
            fontFamily: "Permanent Marker",
            color: "rgb(241, 198, 44)",
            fontSize: "22px",
          }}
        >
          at Wildlings Forest School
        </div>
      </div>
    </Parallax>
  );
}
