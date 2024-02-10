import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPickerLayout = ({ setColor, setIsBackground, isBackground }) => {
  return (
    <>
      <div className="colorpicker-layout-container">
        <section className="color-picker">
          <HexColorPicker onChange={setColor} />
        </section>

        <div className="settings">
          <div className="btn-group">
            <button
              className="btn"
              disabled={isBackground}
              onClick={() => setIsBackground(false)}
            >
              {" "}
              Text{" "}
            </button>
            <button
              className="btn"
              disabled={!isBackground}
              onClick={() => setIsBackground(true)}
            >
              {" "}
              Background{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPickerLayout;
