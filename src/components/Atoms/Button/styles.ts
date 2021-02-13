import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    color: ${theme.colors.gray.lightest};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
    background: ${theme.colors.primary.main};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  `}
`;
