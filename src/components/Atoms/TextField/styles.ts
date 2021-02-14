import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    color: ${theme.colors.gray.medium};
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacing.xsmall};
    box-shadow: ${theme.shadows.elevation1};
    background: ${theme.colors.background.light};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};

    &:focus,
    &:hover {
      outline: none;
      box-shadow: ${theme.shadows.outlinePrimary};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
  `}
`;
