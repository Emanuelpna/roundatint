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
      color: ${theme.colors.gray.medium};
      font-size: ${theme.font.sizes.xmedium};
    }

    @media screen and (max-width: 768px) {
      padding: 0 ${theme.spacing.xlarge};

      & > div {
        width: 100%;
      }

      & label {
        text-align: center;
        padding: 0 ${theme.spacing.small};
      }
    }
  `}
`;
