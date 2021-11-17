export default function SubTitle({ children, style }) {
  return (
    <div
      style={{
        color: "#efc429",
        fontFamily: "permanent marker",
        fontSize: "15px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
