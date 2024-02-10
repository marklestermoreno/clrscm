import React from "react";
import CanvaLayout from "./CanvaLayout";
import useColorStore from "../../utils/zustand/colorStore";

const CanvasMain = () => {

  const color = useColorStore((state) => state.color);

  return (
    <>
      <CanvaLayout color={color}></CanvaLayout>
    </>
  );
};

export default CanvasMain;
