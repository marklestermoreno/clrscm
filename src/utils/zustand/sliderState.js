import { create } from "zustand";
import { rgbToHex } from "../function/RGBConversion";
import { hexToRGB } from "../function/HexConversion";

export const useColorSliderStore = (initialColor) => {
  const initialState = hexToRGB(initialColor);

  return create((set) => ({
    sliderRed: initialState.r,
    sliderGreen: initialState.g,
    sliderBlue: initialState.b,
    setSliderRed: (value) => set({ sliderRed: value }),
    setSliderGreen: (value) => set({ sliderGreen: value }),
    setSliderBlue: (value) => set({ sliderBlue: value }),
    getHexColor: () => rgbToHex(set().sliderRed, set().sliderGreen, set().sliderBlue),
  }));
};
