import React, { useLayoutEffect, useState } from "react";

import { ColorHSL } from "/@/domain/model/color/ColorHSL";

import { HexConvertor } from "/@/data/useCases/colorPallete/HexConvertor";
import { ColorPalleteCreator } from "/@/data/useCases/colorPallete/ColorPalleteCreator";
import Button from "/@/components/Atoms/Button";
import TextField from "../../Atoms/TextField";
import { Spacer } from "../../Atoms/Spacer";

export default function Home() {
  const [showPallete, setShowPallete] = useState(false);

  const [colorHex, setColorHex] = useState("");
  const [color, setColor] = useState<ColorHSL>({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });

  const [newTintColors, setNewTintColors] = useState<ColorHSL[]>([]);
  const [newShadeColors, setNewShadeColors] = useState<ColorHSL[]>([]);

  useLayoutEffect(() => {
    const { hue, saturation, lightness } = color;

    const palleteDefiner = new ColorPalleteCreator(hue, saturation, lightness);

    setNewTintColors(palleteDefiner.getTints());
    setNewShadeColors(palleteDefiner.getShades());
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
    <div>
      <header>
        <h1>RoundATint</h1>
        <h3>Um gerador de paleta de cores para o seu novo projeto</h3>
      </header>

      <Spacer size={24} />

      <section>
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

        <div>
          {showPallete && (
            <>
              <div
                style={{
                  display: "flex",
                }}
              >
                {newShadeColors.map((color) => (
                  <div
                    key={`hsl(${color.hue},${color.saturation},${color.lightness})`}
                    style={{
                      display: "block",
                      width: "150px",
                      height: "150px",
                      margin: "12px",
                      background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                }}
              >
                {newTintColors.map((color) => (
                  <div
                    key={`hsl(${color.hue},${color.saturation},${color.lightness})`}
                    style={{
                      display: "block",
                      width: "150px",
                      height: "150px",
                      margin: "12px",
                      background: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
