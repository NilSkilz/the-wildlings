import React from "react";

export default function Social() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <div
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#f2682a",
          color: "#fff",
          margin: "5px",
        }}
      >
        F
      </div>

      <div
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#5b9a42",
          color: "#fff",
          margin: "5px",
        }}
      >
        T
      </div>

      <div
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#efc429",
          color: "#fff",
          margin: "5px",
        }}
      >
        I
      </div>
      <div
        style={{
          margin: "20px",
          fontWeight: "900",
          fontFamily: "candal",
          fontSize: "14px",
        }}
      >
        aimee@the-wildlings.co.uk
      </div>
    </div>
  );
}
