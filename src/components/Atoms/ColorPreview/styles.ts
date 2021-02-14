import styled, { css } from "styled-components";

export const ColorPreview = styled.span<{ colorHex: string }>`
  ${({ theme, colorHex }) => css`
    width: 36px;
    height: 36px;
    display: block;
    background: ${colorHex};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
  `}
`;
