// Origem (ajustada para melhor leitura): https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf
// Ajuste no valor final (multiplicando por 100 e por 360): https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

export function HexConvertor(hex: string): ColorHSL | void {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return;

  const redRaw = parseInt(result[1], 16);
  const greenRaw = parseInt(result[2], 16);
  const blueRaw = parseInt(result[3], 16);

  const red = redRaw / 255;
  const green = greenRaw / 255;
  const blue = blueRaw / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let hue = 0,
    saturation = 0,
    lightness = (max + min) / 2;

  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    let variation = max - min;

    saturation =
      lightness > 0.5 ? variation / (2 - max - min) : variation / (max + min);

    switch (max) {
      case red:
        hue = (green - blue) / variation + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / variation + 2;
        break;
      case blue:
        hue = (red - green) / variation + 4;
        break;
    }

    hue /= 6;
  }

  const HSL = {
    hue: Math.round(360 * hue),
    saturation: Math.round(100 * saturation),
    lightness: Math.round(100 * lightness),
  };

  return HSL;
}
