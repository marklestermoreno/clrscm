import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

/* CSS and Javascript */
import "./ColorPicker.css";
import {
  hexToRGB,
  hexToCmyk,
  hexToHSL,
} from "../../utils/function/HexConversion.js";

/* CComponents */
import ColorPickerLayout from "./ColorPickerLayout";
import useColorStore from "../../utils/zustand/colorStore";
import useOptionsStore from "../../utils/zustand/optionStore";
import ColorPickerDesc from "./ColorPickerDesc.jsx";

const ColorPickerMain = () => {
  const prevColor = useRef("");

  const setTextColor = useColorStore((state) => state.setTextColor);
  const setBackgroundColor = useColorStore((state) => state.setBackgroundColor);

  const textColor = useColorStore((state) => state.textColor);
  const backgroundColor = useColorStore((state) => state.backgroundColor);

  const setIsBackground = useOptionsStore((state) => state.setIsBackground);
  const isBackground = useOptionsStore((state) => state.isBackground);

  // State for hexToRGB
  const [textRGB, setTextRGB] = useState("");
  const [bgRGB, setBgRGB] = useState("");

  // State for hexToCMYK
  const [textCMYK, setTextCMYK] = useState("");
  const [bgCMYK, setBgCMYK] = useState("");

  // State for hexToHSL
  const [textHSL, setTextHSL] = useState("");
  const [bgHSL, setBgHSL] = useState("");

  // State for Copy
  const [isCopy, setIsCopy] = useState(false);

  // Handle Copy
  const handleCopyHex = () => {
    if (prevColor.current !== textColor) {
      setIsCopy(true);
      toast("Copied Hex " + textColor.toUpperCase());
    } else if (prevColor.current !== backgroundColor) {
      setIsCopy(true);
      toast("Copied Hex " + backgroundColor.toUpperCase());
    } else {
      setIsCopy(false);
    }
  };

  // Handle Copy Others
  const handleCopyOthers = (pColorFormat) => {
    if (isBackground) {
      if (pColorFormat === "HEX") {
        toast("Copied HEX " + backgroundColor.toUpperCase());
      } else if (pColorFormat === "RGB") {
        toast("Copied " + bgRGB.toUpperCase());
      } else if (pColorFormat === "CMYK") {
        toast("Copied " + bgCMYK.toUpperCase());
      } else if (pColorFormat === "HSL") {
        toast("Copied " + bgHSL.toUpperCase());
      }
    } else {
      if (pColorFormat === "HEX") {
        toast("Copied HEX " + textColor.toUpperCase());
      } else if (pColorFormat === "RGB") {
        toast("Copied " + textRGB.toUpperCase());
      } else if (pColorFormat === "CMYK") {
        toast("Copied " + textCMYK.toUpperCase());
      } else if (pColorFormat === "HSL") {
        toast("Copied " + textHSL.toUpperCase());
      }
    }
  };

  /* -------------- End RGB Function ----------- */

  // Handle Input
  const handleInputHexChange = (event) => {
    let inputValue = event.target.value;

    console.log(inputValue);

    if (inputValue.startsWith("#")) {
      console.log(inputValue);
      if (isBackground) {
        setBackgroundColor(inputValue);
      } else {
        setTextColor(inputValue);
      }
    }
  };

  useEffect(() => {
    setIsCopy(false);

    /* ------------------- Color Description ---------------------- */

    const { r: textR, g: textG, b: textB } = hexToRGB(textColor);
    setTextRGB(`rgb(${textR}, ${textG}, ${textB})`);

    const { r: bgR, g: bgG, b: bgB } = hexToRGB(backgroundColor);
    setBgRGB(`rgb(${bgR}, ${bgG}, ${bgB})`);

    const { c: textC, m: textM, y: textY, k: textK } = hexToCmyk(textColor);
    setTextCMYK(`cmyk(${textC}%, ${textM}%, ${textY}%, ${textK}%)`);

    const { c: bgC, m: bgM, y: bgY, k: bgK } = hexToCmyk(backgroundColor);
    setBgCMYK(`cmyk(${bgC}%, ${bgM}%, ${bgY}%, ${bgK}%)`);

    const { h: textH, s: textS, l: textHSL } = hexToHSL(textColor);
    setTextHSL(`hsl(${textH}%, ${textS}%, ${textHSL}%)`);

    const { h: bgH, s: bgS, l: bgL } = hexToHSL(backgroundColor);
    setBgHSL(`hsl(${bgH}%, ${bgS}%, ${bgL}%)`);

    /* -------------------- Color Format ---------------------- */
  }, [textColor, backgroundColor, isBackground]);

  return (
    <>
      <div className="colorpicker-layout-container">
        {/* Color Picker */}

        <ColorPickerLayout
          setTextColor={setTextColor}
          textColor={textColor}
          setBackgroundColor={setBackgroundColor}
          backgroundColor={backgroundColor}
          setIsBackground={setIsBackground}
          isBackground={isBackground}
          handleCopyHex={() => handleCopyHex()}
          handleInputHexChange={(e) => handleInputHexChange(e)}
          isCopy={isCopy}
        ></ColorPickerLayout>

        {/* Color Description */}

        <ColorPickerDesc
          textColor={textColor}
          backgroundColor={backgroundColor}
          isBackground={isBackground}
          textRGB={textRGB}
          textCMYK={textCMYK}
          textHSL={textHSL}
          bgRGB={bgRGB}
          bgCMYK={bgCMYK}
          bgHSL={bgHSL}
          handleCopyOthers={handleCopyOthers}
        ></ColorPickerDesc>
      </div>
    </>
  );
};

export default ColorPickerMain;
