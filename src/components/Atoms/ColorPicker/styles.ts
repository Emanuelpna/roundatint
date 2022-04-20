import styled, { css } from "styled-components";

export const ColorPickerContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

type ColorPickerPreviewBlockProps = { colorHex: string }

export const ColorPickerPreviewBlock = styled.div<ColorPickerPreviewBlockProps>`
   ${({ theme, colorHex }) => css`
    width: 12rem;
    background: ${colorHex};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};

    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1rem;
    
  `}
`;
