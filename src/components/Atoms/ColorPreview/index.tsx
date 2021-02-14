import React from "react";

import * as S from "./styles";

type ColorPreviewProps = {
  colorHex: string;
  className: string;
};

export default function ColorPreview({
  colorHex,
  className,
}: ColorPreviewProps) {
  return (
    <S.ColorPreview
      title={colorHex}
      colorHex={colorHex}
      className={className}
    />
  );
}
