

/* ----------------------------------------------------------------- */
/* -------------------------------- RGB ---------------------------- */
/* ----------------------------------------------------------------- */

export function rgbToHex(r, g, b) {
    // Ensure the values are within the valid range (0 to 255)
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    // Convert each component to a two-digit hexadecimal string
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
  
    return `#${hexR}${hexG}${hexB}`;
  }
  
  /* ------------------------------------------------------------------ */
  
  export function rgbToCmyk(r, g, b) {
    // Normalize RGB values to the range 0 - 1
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
  
    // Find the maximum value among RGB components
    const maxColor = Math.max(red, green, blue);
  
    // Calculate the key (black) component
    const black = 1 - maxColor;
  
    // Avoid division by zero
    const cyan = (1 - red - black) / (1 - black) || 0;
    const magenta = (1 - green - black) / (1 - black) || 0;
    const yellow = (1 - blue - black) / (1 - black) || 0;
  
    // Round the values to ensure they are within the valid range
    const roundedCyan = Math.round(cyan * 100);
    const roundedMagenta = Math.round(magenta * 100);
    const roundedYellow = Math.round(yellow * 100);
    const roundedBlack = Math.round(black * 100);
  
    return {
      c: roundedCyan,
      m: roundedMagenta,
      y: roundedYellow,
      k: roundedBlack,
    };
  }
  
  
  /* ----------------------------------------------------------------- */
  
  // Function to convert RGB to HSL
  export const rgbToHSL = (r, g, b) => {
  
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find the minimum and maximum values
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
  
    // Calculate the lightness (L)
    let l = (max + min) / 2;
  
    // Calculate the saturation (S)
    let s = 0;
    if (max !== min) {
      s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
  
    // Calculate the hue (H)
    let h = 0;
    if (max !== min) {
      switch (max) {
        case r:
          h = (g - b) / (max - min) + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / (max - min) + 2;
          break;
        case b:
          h = (r - g) / (max - min) + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }
  
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };
  
  