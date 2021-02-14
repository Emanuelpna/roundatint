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
