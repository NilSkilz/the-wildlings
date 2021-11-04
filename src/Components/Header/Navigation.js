import React from "react";
import NavigationButton from "./Components/NavigationButton";

export default function Navigation() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <NavigationButton name="HOME" isSelected />
      <NavigationButton name="ACTIVITIES" />
      <NavigationButton name="ABOUT" />
      <NavigationButton name="CONTACT" />
    </div>
  );
}
