import React from "react";
import CanvaLayout from "./CanvaLayout";
import useOptionStore from "../../utils/zustand/optionStore";
import useColorStore from "../../utils/zustand/colorStore";

const CanvasMain = () => {
  const textColor = useColorStore((state) => state.textColor);
  const backgroundColor = useColorStore(
    (state) => state.backgroundColor
  );
  const isBackground = useOptionStore((state) => state.isBackground);
  return (
    <>
      <CanvaLayout
        textColor={textColor}
        backgroundColor={backgroundColor}
        isBackground={isBackground}
      ></CanvaLayout>
    </>
  );
};

export default CanvasMain;
