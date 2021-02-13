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
    <S.Wrapper title="Clique para copiar Cor para área de tranferência" onClick={copyColorOnClick}>
      <S.Block colorCode={colorCode} />
      <S.ColorName>{colorConvertor.hslToString(colorCode)}</S.ColorName>
    </S.Wrapper>
  );
}
