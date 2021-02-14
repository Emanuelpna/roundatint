import styled, { css } from "styled-components";

export const ColorList = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, min-content));
    align-items: center;
    justify-content: space-evenly;
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.gray.dark};
    font-size: ${theme.font.sizes.xmedium};
    padding-left: ${theme.spacing.xsmall};
    border-left: 4px solid ${theme.colors.gray.dark};
  `}
`;
