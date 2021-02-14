import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    cursor: pointer;
    color: ${theme.colors.gray.lightest};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
    background: ${theme.colors.primary.main};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
    transition: 150ms ease-in-out;

    &:hover {
      box-shadow: ${theme.shadows.elevation2};
      background: ${theme.colors.primary.dark};
    }

    &:focus {
      outline: none;
      box-shadow: ${theme.shadows.outlinePrimary};
    }
  `}
`;
