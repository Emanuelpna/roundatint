import React from "react";

import * as S from "./styles";

type ColorPreviewProps = {
  colorHex: string;
};

export default function ColorPreview({ colorHex }: ColorPreviewProps) {
  return <S.ColorPreview colorHex={colorHex} />;
}
