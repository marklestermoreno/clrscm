

/* ------------------------------------------------------------- */
/* ---------------------------- HSL ---------------------------- */
/* ------------------------------------------------------------ */


export function HSLToHex(h, s, l) {
    // Ensure h, s, and l are within valid ranges
    h = h >= 0 && h <= 360 ? h : 0;
    s = s >= 0 && s <= 100 ? s : 0;
    l = l >= 0 && l <= 100 ? l : 0;
  
    // Convert h, s, and l to the range [0, 1]
    h /= 360;
    s /= 100;
    l /= 100;
  
    // Calculate RGB values
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    // Convert RGB to hexadecimal
    const toHex = (c) =>
      Math.round(c * 255)
        .toString(16)
        .padStart(2, "0");
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
    return hex;
  }
  
  /* ------------------------------------------------------------ */
  
  export const hslToCMYK = (h, s, l) => {
    // Normalize HSL values
    h /= 360;
    s /= 100;
    l /= 100;
  
    // Calculate Chroma (C)
    const c = (1 - Math.abs(2 * l - 1)) * s;
  
    // Calculate Hue Prime (H')
    const hp = h * 6;
  
    // Calculate intermediate values
    const x = c * (1 - Math.abs((hp % 2) - 1));
  
    // Initialize CMYK components
    let cmyk = {
      c: 0,
      m: 0,
      y: 0,
      k: 0,
    };
  
    // Determine which sector of the color wheel H' is in and set CMY components
    if (0 <= hp && hp < 1) {
      cmyk.c = c;
      cmyk.m = x;
    } else if (1 <= hp && hp < 2) {
      cmyk.c = x;
      cmyk.m = c;
    } else if (2 <= hp && hp < 3) {
      cmyk.m = c;
      cmyk.y = x;
    } else if (3 <= hp && hp < 4) {
      cmyk.m = x;
      cmyk.y = c;
    } else if (4 <= hp && hp < 5) {
      cmyk.c = x;
      cmyk.y = c;
    } else if (5 <= hp && hp < 6) {
      cmyk.c = c;
      cmyk.y = x;
    }
  
    // Calculate Key (K)
    cmyk.k = 1 - Math.max(c, Math.max(cmyk.m, cmyk.y));
  
    // Normalize CMYK values to percentages
    cmyk.c = Math.round(cmyk.c * 100);
    cmyk.m = Math.round(cmyk.m * 100);
    cmyk.y = Math.round(cmyk.y * 100);
    cmyk.k = Math.round(cmyk.k * 100);
  
    return cmyk;
  };
  
  /* ------------------------------------------------------------ */
  
  export const hslToRGB = (h, s, l) => {
    // Normalize HSL values
    h /= 360;
    s /= 100;
    l /= 100;
  
    // Helper function to calculate RGB values
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
  
    // Calculate intermediate values
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
  
    // Calculate RGB components
    const red = hue2rgb(p, q, h + 1 / 3);
    const green = hue2rgb(p, q, h);
    const blue = hue2rgb(p, q, h - 1 / 3);
  
    // Normalize RGB values to [0, 255] and round
    const rgb = {
      r: Math.round(red * 255),
      g: Math.round(green * 255),
      b: Math.round(blue * 255),
    };
  
    return rgb;
  };
  