import { useState } from "react";
import switcherStyles from "./ColorSwitcher.module.css";

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("blue");
  const [selectedWidth, setSelectedWidth] = useState(100);

  return (
    <div className={switcherStyles.container}>
      <select
        onChange={(e) => setBgColor(e.target.value)}
        className={switcherStyles.switcher}
        name="Colors"
      >
        <option value="red">Color Red</option>
        <option value="blue">Color Blue</option>
        <option value="green">Color Green</option>
      </select>

      <select
        onChange={(e) => setSelectedWidth(e.target.value)}
        className={switcherStyles.switcher}
        name="Colors"
      >
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
      </select>

      <div
        style={{
          backgroundColor: bgColor,
          width: selectedWidth,
          height: selectedWidth,
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
