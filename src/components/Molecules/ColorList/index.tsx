import React from "react";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { ColorConvertor } from "/@/data/useCases/colorPallete/ColorConvertor";

import ColorBlock from "/@/components/Atoms/ColorBlock";

import * as S from "./styles";

export type ColorListProps = {
  title: string;
  colorList: ColorHSL[];
};

export default function ColorList({ title, colorList }: ColorListProps) {
  const colorConvertor = new ColorConvertor();

  console.log('title :>> ', title);

  return (
    <div>
      <S.Title>{title}</S.Title>

      <S.ColorList>
        {colorList.map((color) => (
          <ColorBlock colorCode={color} key={colorConvertor.hslToString(color)} />
        ))}
      </S.ColorList>
    </div>
  );
}
