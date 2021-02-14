import { ColorType } from "/@/data/model/ColorType";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { ColorPallete } from "/@/data/protocols/colorPallete/ColorPallete";

export class ColorPalleteCreator implements ColorPallete {
  public totalSteps = 6;
  public stepTintVariation = 0;
  public higherContrast = true;

  private _lightestTint: ColorHSL | undefined;
  private _darkestShade: ColorHSL | undefined;

  constructor(
    public hue: number,
    public saturation: number,
    public lightness: number
  ) {}

  public getTints() {
    const tints = this._getColorVariation("tint");

    this._lightestTint = tints.pop();

    return tints;
  }

  public getShades() {
    const shades = this._getColorVariation("shade");

    this._darkestShade = shades.pop();

    return shades;
  }

  public getTextVariations() {
    if (!this._darkestShade || !this._lightestTint) return [];

    if (!this._darkestShade?.saturation || !this._lightestTint?.saturation)
      return [];

    const lightnessInterval =
      this._lightestTint.lightness - this._darkestShade.lightness;

    const stepVariation = lightnessInterval / this.totalSteps;

    const textVariationsMiddleColors: ColorHSL[] = [];

    // Define as cores intermediárias
    for (let index = 2; index <= this.totalSteps + 1; index++) {
      const newColorVariation = stepVariation * index;

      const newLightness = this._offsetOutOfBoundaryValue(
        this._lightestTint.lightness - newColorVariation
      );

      textVariationsMiddleColors.push({
        ...this._lightestTint,
        // Fixa saturação em 8
        saturation: 8,
        lightness: newLightness,
      });
    }

    const textVariationsMiddleColorsFiltered = textVariationsMiddleColors
      .filter((textColor) => {
        const darkestLightness = (this._darkestShade?.lightness ?? 0) + 3;

        return textColor.lightness > darkestLightness;
      })
      .filter((textColor) => {
        const lightestLightness = (this._lightestTint?.lightness ?? 0) - 3;

        return textColor.lightness < lightestLightness;
      });

    const textVariations: ColorHSL[] = [];

    textVariations.push({
      ...this._lightestTint,
      saturation: 8,
    });

    for (const iterator of textVariationsMiddleColorsFiltered) {
      textVariations.push(iterator);
    }

    textVariations.push({
      ...this._darkestShade,
      saturation: 8,
    });

    return textVariations;
  }

  private _getColorVariation(type: ColorType): ColorHSL[] {
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

      return maxBoundaryOffset + saturationVariation;
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

  private _getYVariation(currentLightness: number) {
    const variationByCurrentLightness = this.saturation / currentLightness;

    // Para que a variação comece baixa e vá aumentando
    const variationByTheInverseOfCurrentLightness = 100 - currentLightness;

    // Transforma uma variação linear em uma não-lienar
    const exponencialVariation = Math.exp(
      variationByTheInverseOfCurrentLightness / 16
    );

    const newValue = Math.sqrt(
      variationByCurrentLightness * exponencialVariation
    );

    return newValue;
  }
}
