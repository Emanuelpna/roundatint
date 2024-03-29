import React, { useContext, useLayoutEffect, useState } from "react";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { I18nContext } from "/@/data/context/I18nContext";

import { HexConvertor } from "/@/data/useCases/colorPallete/HexConvertor";
import { ColorPalleteCreator } from "/@/data/useCases/colorPallete/ColorPalleteCreator";

import Button from "/@/components/Atoms/Button";
import { Grid } from "/@/components/Atoms/Grid";
import Header from "/@/components/Atoms/Header";
import { Spacer } from "/@/components/Atoms/Spacer";
import TextField from "/@/components/Atoms/TextField";
import ColorPreview from "/@/components/Atoms/ColorPreview";

import ColorList from "/@/components/Molecules/ColorList";

import * as S from "./styles";

export default function Home() {
  const { locale } = useContext(I18nContext);

  const [showPallete, setShowPallete] = useState(false);

  const [colorHex, setColorHex] = useState("");
  const [color, setColor] = useState<ColorHSL>({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });

  const [newTintColors, setNewTintColors] = useState<ColorHSL[]>([]);
  const [newTextColors, setNewTextColors] = useState<ColorHSL[]>([]);
  const [newShadeColors, setNewShadeColors] = useState<ColorHSL[]>([]);

  useLayoutEffect(() => {
    const { hue, saturation, lightness } = color;

    const palleteDefiner = new ColorPalleteCreator(hue, saturation, lightness);

    setNewTintColors(palleteDefiner.getTints());
    setNewShadeColors(palleteDefiner.getShades());
    setNewTextColors(palleteDefiner.getTextVariations());
  }, [color]);

  const generateColorPallete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const colorTranslated = HexConvertor(colorHex);

    if (colorTranslated) {
      setColor(colorTranslated);
      setShowPallete(true);
    }
  };

  return (
    <main>
      <Header />

      <Spacer size={96} />

      <Grid.Container>
        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          <S.ColorForm onSubmit={generateColorPallete}>
            {colorHex && (
              <ColorPreview
                colorHex={colorHex.includes("#") ? colorHex : `#${colorHex}`}
              />
            )}

            <TextField
              id="colorChooser"
              name="colorChooser"
              initialValue={colorHex}
              label={locale.home.label}
              placeholder={locale.home.placeholder}
              onInputChange={(value: string) => setColorHex(value.trim())}
            />

            <Button type="submit">{locale.home.button}</Button>
          </S.ColorForm>
        </Grid.Column>

        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          {showPallete && (
            <>
              <Spacer size={24} />

              <ColorList title={locale.home.shades} colorList={newShadeColors} />

              <Spacer size={24} />

              <ColorList title={locale.home.tints} colorList={newTintColors} />

              <Spacer size={24} />

              <ColorList title={locale.home.text} colorList={newTextColors} />
            </>
          )}
        </Grid.Column>
      </Grid.Container>

      <Spacer size={96} />
    </main>
  );
}
