import React from "react";
import { useColorSliderStore } from "../../../utils/zustand/sliderState";

const RGB = ({ isBackground, textcColor, backgroundColor }) => {
  const backgroundColorStore = useColorSliderStore(backgroundColor);
  const textColorStore = useColorSliderStore(textcColor);

  return (
    <>
      <div className="sub-format">
        <h4 className="format-header"> Color Components</h4>

        <div>
          <h2>{isBackground ? "Background" : "Text"} Color</h2>
          {isBackground ? (
            <BackgroundSlider colorStore={backgroundColorStore} />
          ) : (
            <TextSlider colorStore={textColorStore} />
          )}
        </div>
      </div>
    </>
  );
};

export default RGB;

// Other Components

const ColorSlider = ({ label, value, onChange }) => (
  <div className="color-format">
    <div className="title red">{label}</div>

    <span className="description"> {value}</span>
    <span className="color-adjuster">
      <input type="range" min="0" max="255" value={value} onChange={onChange} />
    </span>
  </div>
);

const BackgroundSlider = ({ colorStore }) => (
  <>
    <ColorSlider
      label="Red"
      value={colorStore.sliderRed}
      onChange={colorStore.setSliderRed}
    />
    <ColorSlider
      label="Green"
      value={colorStore.sliderGreen}
      onChange={colorStore.setSliderGreen}
    />
    <ColorSlider
      label="Blue"
      value={colorStore.sliderBlue}
      onChange={colorStore.setSliderBlue}
    />
    <div>
      <p>Hex Background Color: {colorStore.getHexColor()}</p>
    </div>
  </>
);

const TextSlider = ({ colorStore }) => (
  <>
    <ColorSlider
      label="Red"
      value={colorStore.sliderRed}
      onChange={colorStore.setSliderRed}
    />
    <ColorSlider
      label="Green"
      value={colorStore.sliderGreen}
      onChange={colorStore.setSliderGreen}
    />
    <ColorSlider
      label="Blue"
      value={colorStore.sliderBlue}
      onChange={colorStore.setSliderBlue}
    />
    <div>
      <p>Hex Text Color: {colorStore.getHexColor()}</p>
    </div>
  </>
);
