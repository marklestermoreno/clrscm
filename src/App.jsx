import React from "react";

import "./index.css";
import CanvasMain from "./components/Canvas/CanvasMain";
import ColorPickerMain from "./components/ColorPicker/ColorPickerMain";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="canvas-main-container">
          <CanvasMain> </CanvasMain>
        </div>
        <div className="colorpicker-main-container">
          <ColorPickerMain></ColorPickerMain>
        </div>
      </div>
    </>
  );
}

export default App;
