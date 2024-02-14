import React, { useState } from "react";

const RGB = ({ isBackground }) => {
  // Text
  const [sliderRedText, setSliderRedText] = useState(50);
  const [sliderGreenText, setSliderGreenText] = useState(50);
  const [sliderBlueText, setSliderBlueText] = useState(50);

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
  const [sliderRedBG, setSliderRedBG] = useState(50);
  const [sliderGreenBG, setSliderGreenBG] = useState(50);
  const [sliderBlueBG, setSliderBlueBG] = useState(50);

  const handleSliderRedBG = (event) => {
    setSliderRedBG(event.target.value);
  };

  const handleSliderGreenBG = (event) => {
    setSliderGreenBG(event.target.value);
  };

  const handleSliderBlueBG = (event) => {
    setSliderBlueBG(event.target.value);
  };

  return (
    <>
      <div className="sub-format">
        <h4 className="format-header"> Color Components</h4>
        <div className="color-format">
          <div className="title red">Red</div>

          <span className="description">
            {" "}
            {isBackground ? sliderRedText : sliderRedBG}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderRedText : sliderRedBG}
              onChange={isBackground ? handleSliderRedText : handleSliderRedBG}
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title green">Green</div>

          <span className="description">
            {" "}
            {isBackground ? sliderGreenText : sliderGreenBG}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderGreenText : sliderGreenBG}
              onChange={
                isBackground ? handleSliderGreenText : handleSliderGreenBG
              }
            />
          </span>
        </div>

        <div className="color-format">
          <div className="title blue">Blue</div>

          <span className="description">
            {" "}
            {isBackground ? sliderBlueText : sliderBlueBG}{" "}
          </span>
          <span className="color-adjuster">
            <input
              type="range"
              min="0"
              max="255"
              value={isBackground ? sliderBlueText : sliderBlueBG}
              onChange={
                isBackground ? handleSliderBlueText : handleSliderBlueBG
              }
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default RGB;
