import { ColorType } from "/@/data/model/ColorType";

import { ColorPallete } from "/@/data/protocols/colorPallete/ColorPallete";

export class ColorPalleteCreator implements ColorPallete {
  public totalSteps = 5;
  public stepTintVariation = 0;
  public higherContrast = true;

  constructor(
    public hue: number,
    public saturation: number,
    public lightness: number
  ) {}

  public getTints() {
    return this._getColorVariation("tint");
  }

  public getShades() {
    return this._getColorVariation("shade");
  }

  private _getColorVariation(type: ColorType) {
    const newLightnessValues = [];
    const newSaturationValues = [];

    let value = this.lightness;
    for (let index = 0; index < this.totalSteps; index++) {
      newSaturationValues.push(this._offsetSaturation(value, type));

      value = Math.ceil(value - this._getVariationStep(type));

      newLightnessValues.push(value);
    }

    const newColors = [];

    newColors.push({
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness,
    });

    for (let index = 0; index < this.totalSteps; index++) {
      const newSaturation = newSaturationValues[index];
      const newLightness = newLightnessValues[index];

      newColors.push({
        hue: this._getHueVariation(this.hue, index, type),
        saturation: this._offsetOutOfBoundaryValue(newSaturation),
        lightness: this._offsetOutOfBoundaryValue(newLightness),
      });
    }

    return newColors;
  }

  private _offsetSaturation(value: number, type: ColorType) {
    const saturationVariation = this._getYVariation(value);

    if (this.higherContrast) {
      const maxBoundaryOffset = this.saturation;

      return maxBoundaryOffset - saturationVariation;
    } else {
      const maxBoundaryOffset =
        this.saturation - Math.abs(this._getVariationStep(type));

      return maxBoundaryOffset - saturationVariation;
    }
  }

  private _getHueVariation(hue: number, variation: number, type: ColorType) {
    if (type === "tint") {
      return hue - variation / 2;
    } else {
      return hue + variation / 2;
    }
  }

  private _offsetOutOfBoundaryValue(number: number) {
    if (number >= 96) {
      return Math.ceil(100 - Math.abs(this._getVariationStep("tint") / 4));
    } else if (number <= 4) {
      return Math.ceil(0 + Math.abs(this._getVariationStep("shade") / 4));
    } else {
      return Math.ceil(number);
    }
  }

  private _getVariationStep(type: ColorType) {
    if (type === "tint") {
      return (this.lightness - 100) / this.totalSteps;
    } else {
      return this.lightness / this.totalSteps;
    }
  }

  private _getYVariation(x: number) {
    return Math.ceil(x / 2 / (this.saturation * 1.8));
  }
}
