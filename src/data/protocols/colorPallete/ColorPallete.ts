import { ColorHSL } from "/@/domain/model/color/ColorHSL";

export interface ColorPallete {
  hue: number;
  lightness: number;
  saturation: number;
  totalSteps: number;
  higherContrast: boolean;
  stepTintVariation: number;

  getTints: () => ColorHSL[];
  getShades: () => ColorHSL[];
}
