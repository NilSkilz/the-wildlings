export default function NavigationButton({ name, isSelected }) {
  return (
    <button
      style={{
        backgroundColor: isSelected ? "#f2682a" : "#fff",
        borderRadius: "18px",
        border: "none",
        padding: "5px",
        margin: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontWeight: "900",
        color: isSelected ? "#fff" : "#000",
        fontFamily: "candal",
        fontSize: "14px",
      }}
    >
      {name}
    </button>
  );
}
