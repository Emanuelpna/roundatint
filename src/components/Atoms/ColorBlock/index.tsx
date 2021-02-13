import React, { EventHandler, MouseEventHandler } from "react";
import copy from "copy-to-clipboard";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { ColorConvertor } from "/@/data/useCases/colorPallete/ColorConvertor";

import * as S from "./styles";

export type ColorBlockProps = {
  colorCode: ColorHSL;
};

export default function ColorBlock({ colorCode }: ColorBlockProps) {
  const colorConvertor = new ColorConvertor();

  function copyColorOnClick() {
    copy(colorConvertor.hslToString(colorCode), {});
  }

  return (
    <div onClick={copyColorOnClick}>
      <S.Block colorCode={colorCode} />
      <S.ColorName>{colorConvertor.hslToString(colorCode)}</S.ColorName>
    </div>
  );
}
