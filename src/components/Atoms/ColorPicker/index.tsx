import React from "react";
import {
  toColor,
  useColor,
  ColorPicker as ReactColorPicker,
} from "react-color-palette";

import Button from "../Button";

import * as S from "./styles";
import "react-color-palette/lib/css/styles.css";

type ColorPickerProps = {
  colorHex: string;
  className?: string;
};

export default function ColorPicker({ colorHex }: ColorPickerProps) {
  const [color, setColor] = useColor("hex", colorHex);

  return (
    <S.ColorPickerContainer>
      <S.ColorPickerPreviewBlock colorHex={color.hex}>
        <Button onClick={() => setColor(toColor("hex", colorHex))}>
          Reverter
        </Button>
      </S.ColorPickerPreviewBlock>
      <ReactColorPicker
        dark
        hideHSV
        width={500}
        height={200}
        color={color}
        onChange={setColor}
      />
    </S.ColorPickerContainer>
  );
}
