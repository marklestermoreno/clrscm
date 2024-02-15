import React, { useEffect, useState } from "react";
import { HSLToHex, hexToHSL } from "../../../utils/function/Conversion";

const HSL = ({
  isBackground,
  setTextColor,
  setBackgroundColor,
  backgroundColor,
  textColor,
}) => {
  // Text
  const [sliderHueText, setSliderHueText] = useState(
    () => hexToHSL(textColor).h
  );
  const [sliderSaturationText, setSliderSaturationText] = useState(
    () => hexToHSL(textColor).s
  );
  const [sliderLightText, setSliderLightText] = useState(
    () => hexToHSL(textColor).l
  );

  const handleSliderHueText = (event) => {
    setSliderHueText(event.target.value);
  };

  const handleSliderSaturationText = (event) => {
    setSliderSaturationText(event.target.value);
  };

  const handleSliderLightText = (event) => {
    setSliderLightText(event.target.value);
  };

  // Background
  const [sliderHueBG, setSliderHueBG] = useState(
    () => hexToHSL(backgroundColor).h
  );
  const [sliderSaturationBG, setSliderSaturationBG] = useState(
    () => hexToHSL(backgroundColor).s
  );
  const [sliderLightBG, setSliderLightBG] = useState(
    () => hexToHSL(backgroundColor).l
  );

  const handleSliderHueBG = (event) => {
    setSliderHueBG(event.target.value);
  };

  const handleSliderSaturationBG = (event) => {
    setSliderSaturationBG(event.target.value);
  };

  const handleSliderLightBG = (event) => {
    setSliderLightBG(event.target.value);
  };

  useEffect(() => {
    if (isBackground) {
      setBackgroundColor(
        HSLToHex(sliderHueBG, sliderSaturationBG, sliderLightBG)
      );
    } else {
      setTextColor(
        HSLToHex(sliderHueText, sliderSaturationText, sliderLightText)
      );
    }
  }, [
    sliderHueBG,
    sliderSaturationBG,
    sliderLightBG,
    sliderHueText,
    sliderSaturationText,
    sliderLightText,
    isBackground,
    setBackgroundColor,
    setTextColor,
  ]);

  return (
    <>
      <div className="sub-format">
        <h4 className="format-header"> Color Components</h4>
        <div className="color-format">
          <div className="title hue">H</div>

          <span className="description">
            {" "}
            {isBackground ? sliderHueBG : sliderHueText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="100"
              value={isBackground ? sliderHueBG : sliderHueText}
              onChange={isBackground ? handleSliderHueBG : handleSliderHueText}
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title saturation">S</div>

          <span className="description">
            {" "}
            {isBackground ? sliderSaturationBG : sliderSaturationText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="100"
              value={isBackground ? sliderSaturationBG : sliderSaturationText}
              onChange={
                isBackground
                  ? handleSliderSaturationBG
                  : handleSliderSaturationText
              }
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title light">L</div>

          <span className="description">
            {" "}
            {isBackground ? sliderLightBG : sliderLightText}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="100"
              value={isBackground ? sliderLightBG : sliderLightText}
              onChange={
                isBackground ? handleSliderLightBG : handleSliderLightText
              }
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default HSL;
