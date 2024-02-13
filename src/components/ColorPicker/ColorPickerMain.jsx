import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import "./ColorPicker.css";

import ColorPickerLayout from "./ColorPickerLayout";

import useColorStore from "../../utils/zustand/colorStore";
import useOptionsStore from "../../utils/zustand/optionStore";

const ColorPickerMain = () => {
  const prevColor = useRef("");

  const setTextColor = useColorStore((state) => state.setTextColor);
  const setBackgroundColor = useColorStore(
    (state) => state.setBackgroundColor
  );

  const textColor = useColorStore((state) => state.textColor);
  const backgroundColor = useColorStore(
    (state) => state.backgroundColor
  );

  const setIsBackground = useOptionsStore((state) => state.setIsBackground);
  const isBackground = useOptionsStore((state) => state.isBackground);

  const [isCopy, setIsCopy] = useState(false);

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
    console.log(inputValue);
    var inputValue = event.target.value;

    if (inputValue[0] !== "#") {
      inputValue += "#" + inputValue;
    }
  };

  useEffect(() => {
    setIsCopy(false);
  }, [textColor, backgroundColor, isBackground]);

  return (
    <>
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
    </>
  );
};

export default ColorPickerMain;
