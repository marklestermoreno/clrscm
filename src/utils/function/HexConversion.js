/* ----------------------------------------------------------------- */
/* -------------------------------- Hex ---------------------------- */
/* ----------------------------------------------------------------- */

export function hexToRGB(hex) {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

/* -------------------------------------------------------------------- */

export function hexToCmyk(hex) {
  // Remove the hash if present
  hex = hex.replace(/^#/, "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Calculate K (black key)
  const k = 1 - Math.max(r, g, b);

  // Calculate C, M, Y
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

/* -------------------------------------------------------------------- */

export const hexToHSL = (hex) => {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Normalize RGB values to [0, 1]
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
