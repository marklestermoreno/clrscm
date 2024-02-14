import React, { useState } from "react";
import RGB from "./ColorFormat/RGB";

const ColorFormatMain = ({ isBackground }) => {
  // State for Selected Color Format
  const [selectedValue, setSelectedValue] = useState("");

  const selectedColorFormat = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="main-format">
        <h4 className="format-header"> Color Format</h4>
        <select value={selectedValue} onChange={selectedColorFormat}>
          <option value="rgb">RGB - Red, Green, Blue</option>
          <option value="hsl">HSl - Hue, Saturation, Ligthness</option>
          <option value="hsv">HSV - Hue, Saturation, Value</option>
          <option value="cmyk">CMYK - Cyan, Magenta, Yellow, Key(Black)</option>
        </select>

        {/* {selectedValue === "rgb" } {
            
        } */}

        <RGB isBackground={isBackground}></RGB>
      </div>
    </>
  );
};

export default ColorFormatMain;
