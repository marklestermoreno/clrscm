import React from "react";
import { HexColorPicker } from "react-colorful";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorPickerLayout = ({
  setTextColor,
  textColor,
  setBackgroundColor,
  backgroundColor,
  handleInputHexChange,
  setIsBackground,
  isBackground,
  handleCopyHex,
  isCopy,
}) => {
  return (
    <>
      <span className="info"> Enter Hexcode</span>
      <header className="hex-input-container">
        <input
          type="text"
          placeholder="Enter Color/Hex"
          className="hex-text-input"
          maxLength={7}
          value={
            isBackground
              ? backgroundColor.toUpperCase()
              : textColor.toUpperCase()
          }
          onInput={handleInputHexChange}
        />

        <CopyToClipboard
          text={isBackground ? backgroundColor : textColor}
          onCopy={handleCopyHex}
        >
          <span className="btn copy"> {isCopy ? "Copied" : "Copy"} </span>
        </CopyToClipboard>
      </header>
      <section className="color-picker">
        <HexColorPicker
          color={isBackground ? backgroundColor : textColor}
          onChange={isBackground ? setBackgroundColor : setTextColor}
        />
      </section>

      <div className="settings">
        <div className="btn-group">
          <button
            className="btn"
            disabled={!isBackground}
            onClick={() => setIsBackground(true)}
          >
            {" "}
            Text{" "}
          </button>
          <button
            className="btn"
            disabled={isBackground}
            onClick={() => setIsBackground(false)}
          >
            {" "}
            Background{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorPickerLayout;
