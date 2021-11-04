export default function Activity({ title, image, children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src="images/bg-circle-white.webp" style={{ width: "150px" }}></img>
      <img
        src={image}
        style={{
          width: "50px",
          marginTop: "-100px",
          marginBottom: "50px",
          filter:
            "invert(51%) sepia(91%) saturate(2968%) hue-rotate(346deg) brightness(100%) contrast(90%)",
        }}
      ></img>
      <div
        style={{
          color: "#000",
          fontFamily: "candal",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#8c8c8c",
          fontFamily: "bree serif",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
