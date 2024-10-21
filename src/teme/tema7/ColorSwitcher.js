import React from "react";
import switcherStyles from "./ColorSwitcher.module.css";

function ColorSwitcher() {
  let bgColor = "blue";

  return (
    <div className={switcherStyles.container}>
      <select className={switcherStyles.switcher} name="Colors">
        <option value="red">Color Red</option>
        <option value="blue">Color Blue</option>
        <option value="green">Color Green</option>
      </select>

      <div
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
