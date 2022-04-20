import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background.main};

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
      margin-top: -${theme.spacing.large};
    }

    & strong {
      display: block;
      margin-top: ${theme.spacing.regular};
    }
  `}
`;
