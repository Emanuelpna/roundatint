import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    & h3 {
      text-align: center;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray.medium};
      margin-bottom: ${theme.spacing.xxsmall};
    }

    & hr {
      border-top-color: ${theme.colors.gray.lightest};
      border-bottom-color: ${theme.colors.gray.light};
    }
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.shadows.elevation2};
    background: ${theme.colors.background.light};

    & a {
      text-decoration: none;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray.medium};
    }

    & svg {
      width: 44px;
      height: 44px;
      stroke-width: 2px;
      color: ${theme.colors.gray.medium};
    }

    &:hover {
      background: ${theme.colors.primary.main};
    }

    &:hover a {
      color: ${theme.colors.gray.lightest};
    }

    &:hover svg {
      color: ${theme.colors.gray.lightest};
    }

    position: relative;
    & a::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`;
