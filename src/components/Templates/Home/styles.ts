import styled, { css } from "styled-components";

export const ColorForm = styled.form`
  ${({ theme }) => css`
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: center;
    gap: ${theme.spacing.medium};

    & > div {
      width: 40%;
    }

    & input {
      width: 100%;
    }

    & label {
      color: ${theme.colors.gray.main};
      font-size: ${theme.font.sizes.xmedium};
    }
  `}
`;

export const ColorPreview = styled.span<{ colorHex: string }>`
  ${({ theme, colorHex }) => css`
    width: 36px;
    height: 36px;
    background: ${colorHex};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation1};
  `}
`;
