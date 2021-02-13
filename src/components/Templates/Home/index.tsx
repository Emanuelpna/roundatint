import React, { useLayoutEffect, useState } from "react";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { HexConvertor } from "/@/data/useCases/colorPallete/HexConvertor";
import { ColorPalleteCreator } from "/@/data/useCases/colorPallete/ColorPalleteCreator";

import Button from "/@/components/Atoms/Button";
import { Grid } from "/@/components/Atoms/Grid";
import { Spacer } from "/@/components/Atoms/Spacer";
import TextField from "/@/components/Atoms/TextField";

import ColorList from "/@/components/Molecules/ColorList";

export default function Home() {
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
      <Spacer size={24} />

      <Grid.Container>
        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          <h1>RoundATint</h1>
          <h3>Um gerador de paleta de cores para o seu novo projeto</h3>
        </Grid.Column>
      </Grid.Container>

      <Spacer size={24} />

      <Grid.Container>
        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          <form onSubmit={generateColorPallete}>
            <TextField
              id="colorChooser"
              name="colorChooser"
              initialValue={colorHex}
              placeholder="Exemplo: #D33F49"
              label="Digite o código HEX da cor"
              onInputChange={(value: string) => setColorHex(value)}
            />

            <Button type="submit">Gerar Paleta de Cores</Button>
          </form>
        </Grid.Column>

        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          {showPallete && (
            <>
              <Spacer size={24} />

              <ColorList title="Sombras" colorList={newShadeColors} />

              <Spacer size={24} />

              <ColorList title="Luzes" colorList={newTintColors} />

              <Spacer size={24} />

              <ColorList title="Texto" colorList={newTextColors} />
            </>
          )}
        </Grid.Column>
      </Grid.Container>
    </main>
  );
}
