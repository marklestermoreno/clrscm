import React, { useEffect, useState } from "react";
import { rgbToHex, hexToRGB } from "../../../utils/function/Conversion";

const RGB = ({
  isBackground,
  setTextColor,
  setBackgroundColor,
  backgroundColor,
  textColor,
}) => {
  // Text
  const [sliderRedText, setSliderRedText] = useState(
    () => hexToRGB(textColor).r
  );
  const [sliderGreenText, setSliderGreenText] = useState(
    () => hexToRGB(textColor).g
  );
  const [sliderBlueText, setSliderBlueText] = useState(
    () => hexToRGB(textColor).b
  );

  const handleSliderRedText = (event) => {
    setSliderRedText(event.target.value);
  };

  const handleSliderGreenText = (event) => {
    setSliderGreenText(event.target.value);
  };

  const handleSliderBlueText = (event) => {
    setSliderBlueText(event.target.value);
  };

  // Background
  const [sliderRedBG, setSliderRedBG] = useState(
    () => hexToRGB(backgroundColor).r
  );
  const [sliderGreenBG, setSliderGreenBG] = useState(
    () => hexToRGB(backgroundColor).g
  );
  const [sliderBlueBG, setSliderBlueBG] = useState(
    () => hexToRGB(backgroundColor).b
  );

  const handleSliderRedBG = (event) => {
    setSliderRedBG(event.target.value);
  };

  const handleSliderGreenBG = (event) => {
    setSliderGreenBG(event.target.value);
  };

  const handleSliderBlueBG = (event) => {
    setSliderBlueBG(event.target.value);
  };

  useEffect(() => {
    if (isBackground) {
      setBackgroundColor(rgbToHex(sliderRedBG, sliderGreenBG, sliderBlueBG));
    } else {
      setTextColor(rgbToHex(sliderRedText, sliderGreenText, sliderBlueText));
    }
  }, [
    sliderRedBG,
    sliderGreenBG,
    sliderBlueBG,
    sliderRedText,
    sliderGreenText,
    sliderBlueText,
    isBackground,
    setBackgroundColor,
    setTextColor,
  ]);

  return (
    <>
      <div className="sub-format">
        <h4 className="format-header"> Color Components</h4>
        <div className="color-format">
          <div className="title red">Red</div>

          <span className="description">
            {" "}
            {isBackground ? sliderRedBG : sliderRedText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderRedBG : sliderRedText}
              onChange={isBackground ? handleSliderRedBG : handleSliderRedText}
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title green">Green</div>

          <span className="description">
            {" "}
            {isBackground ? sliderGreenBG : sliderGreenText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderGreenBG : sliderGreenText}
              onChange={
                isBackground ? handleSliderGreenBG : handleSliderGreenText
              }
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title blue">Blue</div>

          <span className="description">
            {" "}
            {isBackground ? sliderBlueBG : sliderBlueText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderBlueBG : sliderBlueText}
              onChange={
                isBackground ? handleSliderBlueBG : handleSliderBlueText
              }
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default RGB;
