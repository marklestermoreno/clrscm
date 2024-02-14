export function hexToRGB(hex) {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

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

function rgbToCmyk(r, g, b) {
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

// Example usage:
const hexColor = "#ff0000";
const cmykColor = hexToCmyk(hexColor);
console.log(cmykColor); // Output: { c: 0, m: 100, y: 100, k: 0 }
