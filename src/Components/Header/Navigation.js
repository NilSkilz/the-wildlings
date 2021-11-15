import React from "react";
import NavigationButton from "./Components/NavigationButton";

export default function Navigation() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <NavigationButton name="HOME" link="/" />
      <NavigationButton name="ACTIVITIES" link="/activities" />
      <NavigationButton name="ABOUT" link="/about" />
      <NavigationButton name="BLOG" link="/blog" />
      <NavigationButton name="CONTACT" link="/contact" />
    </div>
  );
}
