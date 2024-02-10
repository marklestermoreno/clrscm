import React, { useState } from "react";
import "./ColorPicker.css";

import ColorPickerLayout from "./ColorPickerLayout";

import useColorStore from "../../utils/zustand/colorStore";
import useOptionsStore from "../../utils/zustand/optionStore";

const ColorPickerMain = () => {
  const setColor = useColorStore((state) => state.setColor);

  const setIsBackground = useOptionsStore((state) => state.setIsBackground);
  const isBackground = useOptionsStore((state) => state.isBackground);

  return (
    <>
      <ColorPickerLayout
        setColor={setColor}
        setIsBackground={setIsBackground}
        isBackground={isBackground}
      ></ColorPickerLayout>
    </>
  );
};

export default ColorPickerMain;
