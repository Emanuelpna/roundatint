import styled, { css } from "styled-components";

import { ColorConvertor } from "/@/data/useCases/colorPallete/ColorConvertor";

import { ColorBlockProps } from ".";

const colorConvertor = new ColorConvertor();

export const Block = styled.div<ColorBlockProps>`
  ${({ theme, colorCode }) => css`
    width: 150px;
    margin: 12px;
    height: 150px;
    display: block;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
    background: ${colorConvertor.hslToString(colorCode)};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  `}
`;

export const ColorName = styled.span`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    text-align: center;
  `}
`;
