import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorPickerDesc = ({
  isBackground,
  textColor,
  backgroundColor,
  bgRGB,
  bgCMYK,
  bgHSL,
  textRGB,
  textCMYK,
  textHSL,
  handleCopyOthers,
}) => {
  return (
    <>
      <div className="main-description">
        <div className="color-information">
          <span className="color-conversion title">HEX</span>
          <CopyToClipboard
            text={isBackground ? backgroundColor : textColor}
            onCopy={() => handleCopyOthers("HEX")}
          >
            <span className="color-conversion description">
              {" "}
              {isBackground ? backgroundColor : textColor}{" "}
            </span>
          </CopyToClipboard>
        </div>

        <div className="color-information">
          <span className="color-conversion title">RGB</span>
          <CopyToClipboard
            text={isBackground ? bgRGB : textRGB}
            onCopy={() => handleCopyOthers("RGB")}
          >
            <span className="color-conversion description">
              {" "}
              {isBackground ? bgRGB : textRGB}{" "}
            </span>
          </CopyToClipboard>
        </div>

        <div className="color-information">
          <span className="color-conversion title">CMYK</span>
          <CopyToClipboard
            text={isBackground ? bgCMYK : textCMYK}
            onCopy={() => handleCopyOthers("CMYK")}
          >
            <span className="color-conversion description">
              {" "}
              {isBackground ? bgCMYK : textCMYK}{" "}
            </span>
          </CopyToClipboard>
        </div>

        <div className="color-information">
          <span className="color-conversion title">HSL</span>
          <CopyToClipboard
            text={isBackground ? bgHSL : textHSL}
            onCopy={() => handleCopyOthers("HSL")}
          >
            <span className="color-conversion description">
              {" "}
              {isBackground ? bgHSL : textHSL}{" "}
            </span>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default ColorPickerDesc;
