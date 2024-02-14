import React from "react";

import { hexToRGB } from "../../utils/function/Conversion";

const ColorPickerDesc = ({ isBackground, textColor, backgroundColor }) => {
  return (
    <>
      <div className="main-description">
        <div className="color-information">
          <span className="color-conversion title">
            HEX {isBackground ? backgroundColor : textColor}{" "}
          </span>
          <span className="color-conversion description"> {} </span>
          <span className="color-conversion title">
            RGB {isBackground ? hexToRGB(backgroundColor) : hexToRGB(textColor)}{" "}
          </span>
          <span className="color-conversion description"> {} </span>
        </div>
      </div>
    </>
  );
};

export default ColorPickerDesc;
