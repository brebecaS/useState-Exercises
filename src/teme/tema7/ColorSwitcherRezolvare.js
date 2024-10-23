import { useState } from "react";
import ColorSwitcherStyle from "./ColorSwitcher.module.css";

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("");

  function handleColorChange(event) {
    setBgColor(event.target.value);
  }

  return (
    <div>
      <select
        onChange={handleColorChange}
        value={"none"}
        className={ColorSwitcherStyle.switcher}
      >
        <option value="none">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          maxWidth: 100,
          backgroundColor: bgColor,
          width: "100px",
          height: "100px",
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
