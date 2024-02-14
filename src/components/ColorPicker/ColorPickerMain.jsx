import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import "./ColorPicker.css";

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

  // Handle Input

  const handleInputHexChange = (event) => {
    let inputValue = event.target.value;

    if (inputValue.startsWith("#")) {
      console.log(inputValue);
      if (isBackground) {
        setBackgroundColor(inputValue);
      } else {
        setTextColor(inputValue);
      }
    }
    // else if (inputValue.length > 0) {
    //   console.log(inputValue);

    //   let matchingColors = colorsData.filter(
    //     (color) =>
    //       color.name &&
    //       color.name.toString().toUpperCase() ===
    //         inputValue.toString().toUpperCase()
    //   );

    //   console.log(matchingColors);
    //   const hexValue = matchingColors[0].hex;

    //   if (isBackground) {
    //     setBackgroundColor(hexValue);
    //   } else {
    //     setTextColor(hexValue);
    //   }

    // }
  };

  useEffect(() => {
    setIsCopy(false);
  }, [textColor, backgroundColor, isBackground]);

  return (
    <>
      <div className="colorpicker-layout-container">
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
        <ColorPickerDesc
          textColor={textColor}
          backgroundColor={backgroundColor}
          isBackground={isBackground}
        ></ColorPickerDesc>
      </div>
    </>
  );
};

export default ColorPickerMain;
