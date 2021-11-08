import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <a
        href="https://www.facebook.com/The-Wildlings-109226074901775"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#f2682a",
          color: "#fff",
          margin: "5px",
          padding: "11px",
        }}
      >
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
      </a>

      <a
        href="https://www.facebook.com/The-Wildlings-109226074901775"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#5b9a42",
          color: "#fff",
          margin: "5px",
          padding: "12px",
        }}
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>

      <a
        href="https://www.facebook.com/The-Wildlings-109226074901775"
        style={{
          width: "45px",
          height: "45px",
          borderRadius: "22.5px",
          backgroundColor: "#efc429",
          color: "#fff",
          margin: "5px",
          padding: "11px",
        }}
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a
        href="mailto:aimee@the-wildlings.co.uk"
        style={{
          margin: "20px",
          fontWeight: "900",
          fontFamily: "candal",
          fontSize: "14px",
          color: "black",
        }}
      >
        aimee@the-wildlings.co.uk
      </a>
    </div>
  );
}
