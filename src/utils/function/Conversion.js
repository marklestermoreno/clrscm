/* ------------------------ Hex To RGB --------------------------- */

export function hexToRGB(hex) {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

/* ------------------------ Hex To CMYK --------------------------- */

export function hexToCmyk(hex) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex value into RGB components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Call the RGB to CMYK conversion function
  return rgbToCmyk(r, g, b);
}

/* ------------------------ RGB To CMYK --------------------------- */

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

/* ------------------------ RGB To HEX --------------------------- */

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

/* ---------------------- Hex To HSL ------------------------- */

export function hexToHSL(hex) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hexadecimal values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Normalize RGB values to be in the range [0, 1]
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Find the minimum and maximum values among the RGB components
  const max = Math.max(normalizedR, normalizedG, normalizedB);
  const min = Math.min(normalizedR, normalizedG, normalizedB);

  // Calculate the lightness
  const lightness = (max + min) / 2;

  // Calculate the saturation
  let saturation;
  if (max === min) {
    saturation = 0; // achromatic
  } else {
    saturation =
      lightness > 0.5
        ? (max - min) / (2 - max - min)
        : (max - min) / (max + min);
  }

  // Calculate the hue
  let hue;
  if (max === min) {
    hue = 0; // achromatic
  } else {
    switch (max) {
      case normalizedR:
        hue = ((normalizedG - normalizedB) / (max - min) + 6) % 6;
        break;
      case normalizedG:
        hue = ((normalizedB - normalizedR) / (max - min) + 2) / 6;
        break;
      case normalizedB:
        hue = ((normalizedR - normalizedG) / (max - min) + 4) / 6;
        break;
      default:
        break;
    }
  }

  // Convert hue to degrees
  hue = Math.round(hue * 360);

  return {
    h: hue,
    s: saturation * 100,
    l: lightness * 100,
  };
}

/* ---------------------- HSL To Hex ------------------------- */

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