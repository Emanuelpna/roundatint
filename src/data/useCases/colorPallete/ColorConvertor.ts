import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { HexConvertor } from "./HexConvertor";

export class ColorConvertor {
  hexToHsl(hex: string) {
    return HexConvertor(hex);
  }
  
  hslToString(color: ColorHSL) {
    return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
  }
}
