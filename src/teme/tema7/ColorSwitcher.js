import React from "react";
import switcherStyles from "./ColorSwitcher.module.css";

function ColorSwitcher() {
  let bgColor = "red";

  return (
    <div className={switcherStyles.container}>
      <select className={switcherStyles.switcher}>
        {/* Render the color options here */}
      </select>

      <div
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
