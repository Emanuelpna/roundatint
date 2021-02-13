import styled, { css } from "styled-components";

import { ColorConvertor } from "/@/data/useCases/colorPallete/ColorConvertor";

import { ColorBlockProps } from ".";

const colorConvertor = new ColorConvertor();

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    &:hover > div {
      box-shadow: ${theme.shadows.elevation2};
    }

    &:hover > div::after {
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 0, 0);
    }
  `}
`;

export const Block = styled.div<ColorBlockProps>`
  ${({ theme, colorCode }) => css`
    width: 120px;
    margin: 12px;
    height: 120px;
    display: block;
    position: relative;
    transition: 150ms ease-in-out;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
    background: ${colorConvertor.hslToString(colorCode)};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};

    &::after {
      content: "Clique para copiar código";
      position: absolute;
      opacity: 0;
      top: -12px;
      left: -12px;
      right: -12px;
      padding: 4px 16px;
      text-align: center;
      pointer-events: none;
      transition: 150ms ease-in-out;
      transform: translate3d(0, -20px, 0);
      color: ${theme.colors.gray.lightest};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.small};
      box-shadow: ${theme.shadows.elevation1};
      background: ${theme.colors.background.dark};
    }
  `}
`;

export const ColorName = styled.span`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    text-align: center;
  `}
`;
