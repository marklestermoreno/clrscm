import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

/* CSS and Javascript */
import "./ColorPicker.css";
import { hexToRGB, hexToCmyk } from "../../utils/function/HexConversion.js";


/* CComponents */
import ColorPickerLayout from "./ColorPickerLayout";
import useColorStore from "../../utils/zustand/colorStore";
import useOptionsStore from "../../utils/zustand/optionStore";
import ColorPickerDesc from "./ColorPickerDesc.jsx";
import ColorFormatMain from "./ColorFormatMain.jsx";

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
      }
    } else {
      if (pColorFormat === "HEX") {
        toast("Copied HEX " + textColor.toUpperCase());
      } else if (pColorFormat === "RGB") {
        toast("Copied " + textRGB.toUpperCase());
      } else if (pColorFormat === "CMYK") {
        toast("Copied " + textCMYK.toUpperCase());
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

    const { c: bgC, m: bgM, y: bgCY, k: bgK } = hexToCmyk(backgroundColor);
    setBgCMYK(`CMYK(${bgC}%, ${bgM}%, ${bgCY}%, ${bgK}%)`);

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
          bgRGB={bgRGB}
          bgCMYK={bgCMYK}
          handleCopyOthers={handleCopyOthers}
        ></ColorPickerDesc>

        {/* Color Format */}

        <ColorFormatMain
          setTextColor={setTextColor}
          textColor={textColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          isBackground={isBackground}
        ></ColorFormatMain>
      </div>
    </>
  );
};

export default ColorPickerMain;
