
/* ------------------------------------------------------------- */
/* --------------------------- CMYK ---------------------------- */
/* ------------------------------------------------------------ */

// Function to convert CMYK to Hex
export const cmykToHex = (c, m, y, k) => {
  // Normalize CMYK values to [0, 1]
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  // Calculate RGB values
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  // Convert RGB to Hex
  const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;

  return hexColor.toUpperCase();
};

/* ------------------------------------------------------------ */

// Function to convert CMYK to RGB
export const cmykToRGB = (c, m, y, k) => {
  // Normalize CMYK values to [0, 1]
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  // Calculate RGB values
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  return { r, g, b };
};

/* ------------------------------------------------------------ */

// Function to convert CMYK to HSL
export const cmykToHSL = (c, m, y, k) => {
  // Normalize CMYK values to [0, 1]
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  // Calculate RGB values
  const r = Math.round(255 * (1 - c) * (1 - k));
  const g = Math.round(255 * (1 - m) * (1 - k));
  const b = Math.round(255 * (1 - y) * (1 - k));

  // Normalize RGB values to [0, 1]
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Find the minimum and maximum values
  const max = Math.max(normalizedR, normalizedG, normalizedB);
  const min = Math.min(normalizedR, normalizedG, normalizedB);

  // Calculate the lightness (L)
  const l = (max + min) / 2;

  // Calculate the saturation (S)
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Calculate the hue (H)
  let h = 0;
  if (max !== min) {
    switch (max) {
      case normalizedR:
        h = (normalizedG - normalizedB) / (max - min) + (normalizedG < normalizedB ? 6 : 0);
        break;
      case normalizedG:
        h = (normalizedB - normalizedR) / (max - min) + 2;
        break;
      case normalizedB:
        h = (normalizedR - normalizedG) / (max - min) + 4;
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
