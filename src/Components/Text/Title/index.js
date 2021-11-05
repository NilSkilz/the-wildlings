export default function Title({ children, style }) {
  return (
    <div
      style={{
        ...style,
        color: "#000",
        fontFamily: "candal",
        fontSize: "45px",
      }}
    >
      {children}
    </div>
  );
}
