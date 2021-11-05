import { Link, useLocation } from "react-router-dom";

export default function NavigationButton({ name, link }) {
  const { pathname } = useLocation();

  const isSelected = pathname === link;
  return (
    <Link
      to={link}
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
        textDecoration: "none",
      }}
    >
      {name}
    </Link>
  );
}
