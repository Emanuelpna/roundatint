import copy from "copy-to-clipboard";
import React, { useContext } from "react";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { I18nContext } from "/@/data/context/I18nContext";

import { ColorConvertor } from "/@/data/useCases/colorPallete/ColorConvertor";

import * as S from "./styles";

export type ColorBlockProps = {
  colorCode: ColorHSL;
};

export default function ColorBlock({ colorCode }: ColorBlockProps) {
  const { locale } = useContext(I18nContext);

  const colorConvertor = new ColorConvertor();

  function copyColorOnClick() {
    copy(colorConvertor.hslToString(colorCode), {});
  }

  return (
    <S.Wrapper onClick={copyColorOnClick} title={locale.home.colorTitle}>
      <S.Block colorCode={colorCode} message={locale.home.colorMessage} />
      <S.ColorName>{colorConvertor.hslToString(colorCode)}</S.ColorName>
    </S.Wrapper>
  );
}
