import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    color: ${theme.colors.gray.lightest};
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacing.xsmall};
    box-shadow: ${theme.shadows.elevation1};
    color: ${theme.colors.gray.main};
    background: ${theme.colors.background.light};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
  `}
`;
