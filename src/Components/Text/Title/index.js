export default function Title({ children, style }) {
  return (
    <div
      style={{
        color: "#000",
        fontFamily: "candal",
        fontSize: "45px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
