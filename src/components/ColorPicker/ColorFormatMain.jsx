import React, { useState, useEffect } from "react";

import RGB from "./ColorFormat/RGB";
import HSL from "./ColorFormat/HSL";

const ColorFormatMain = ({
  setTextColor,
  textColor,
  backgroundColor,
  setBackgroundColor,
  isBackground,
}) => {
  // State for Selected Color Format
  const [selectedValue, setSelectedValue] = useState("rgb");

  const selectedColorFormat = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {}, [
    textColor,
    setTextColor,
    isBackground,
    setBackgroundColor,
    backgroundColor,
  ]);

  return (
    <>
      <div className="main-format">
        <h4 className="format-header"> Color Format</h4>
        <select value={selectedValue} onChange={selectedColorFormat}>
          <option value="rgb">RGB - Red, Green, Blue</option>
          <option value="hsl">HSL - Hue, Saturation, Ligthness</option>
          <option value="hsv">HSV - Hue, Saturation, Value</option>
          <option value="cmyk">CMYK - Cyan, Magenta, Yellow, Key(Black)</option>
        </select>

        <RGB
          setTextColor={setTextColor}
          textColor={textColor}
          setBackgroundColor={setBackgroundColor}
          backgroundColor={backgroundColor}
          isBackground={isBackground}
        ></RGB>
      </div>
    </>
  );
};

export default ColorFormatMain;
