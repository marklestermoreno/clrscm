import React from "react";

import "./index.css";
import CanvasMain from "./components/Canvas/CanvasMain";
import ColorPickerMain from "./components/ColorPicker/ColorPickerMain";
import { Bounce, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          limit={5}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default App;
