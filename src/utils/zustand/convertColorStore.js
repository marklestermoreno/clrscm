import { create } from "zustand";
import { cmykToHex, cmykToRgb, cmykToHsl } from "../function/CMYKConversion";
import { hslToHex, hslToRGB, hslToCMYK } from "../function/HSLConversion";
import { hexToRGB, hexToCmyk, hexToHSL } from "../function/HexConversion";
import { rgbToHex, rgbToCmyk, rgbToHSL } from "../function/RGBConversion";

const useColorStore = create((set) => ({
  textColor: "#000000",
  backgroundColor: "#FFFFFF",
  // Functions to update the colors
  setTextColor: (newColor) => set({ textColor: newColor }),
  setBackgroundColor: (newColor) => set({ backgroundColor: newColor }),

  // Conversion functions
  hexToRGB: (hexColor) => hexToRGB(hexColor),
  hexToCmyk: (hexColor) => hexToCmyk(hexColor),
  hexToHSL: (hexColor) => hexToHSL(hexColor),

  rgbToHex: (rgbColor) => rgbToHex(rgbColor),
  rgbToCmyk: (rgbColor) => rgbToCmyk(rgbColor),
  rgbToHSL: (rgbColor) => rgbToHSL(rgbColor),

  hslToHex: (hslColor) => hslToHex(hslColor),
  hslToCMYK: (hslColor) => hslToCMYK(hslColor),
  hslToRGB: (hslColor) => hslToRGB(hslColor),

  cmykToHex: (cmykColor) => cmykToHex(cmykColor),
  cmykToRgb: (cmykColor) => cmykToRgb(cmykColor),
  cmykToHsl: (cmykColor) => cmykToHsl(cmykColor),
}));

export default useColorStore;
