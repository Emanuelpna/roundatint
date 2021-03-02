import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.medium} 6%;
    background: ${theme.colors.background.light};
    box-shadow: ${theme.shadows.elevationContrast1};
    z-index: 50;

    & h1 {
      color: ${theme.colors.primary.main};
      font-size: ${theme.font.sizes.large};
      font-family: ${theme.font.family.display};
      padding: 0 ${theme.spacing.xsmall};
    }

    & .currentPage h1 {
      color: ${theme.colors.background.light};
      background: ${theme.colors.primary.main};
    }

    & nav {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.medium};
      justify-content: space-between;
      padding: 0 ${theme.spacing.medium};
    }

    & a {
      text-decoration: none;
    }

    & nav a {
      font-weight: ${theme.font.bold};
      padding: 0 ${theme.spacing.xxsmall};
      color: ${theme.colors.primary.main};
      font-size: ${theme.font.sizes.regular};
      font-family: ${theme.font.family.text};
    }

    & nav button {
      border: none;
      cursor: pointer;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary.main};
      font-size: ${theme.font.sizes.small};
      border-radius: ${theme.border.radius};
      background: ${theme.colors.gray.lightest};
      border: 2px solid ${theme.colors.primary.main};
      padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
      transition: 150ms ease-in-out;
    }

    & nav button:hover {
      color: ${theme.colors.gray.lightest};
      background: ${theme.colors.primary.main};
    }

    & nav a.currentPage {
      color: ${theme.colors.background.light};
      background: ${theme.colors.primary.main};
    }

    & nav a:hover {
      color: ${theme.colors.primary.dark};
    }

    & nav a.currentPage:hover {
      color: ${theme.colors.background.light};
      background: ${theme.colors.primary.dark};
    }

    & .currentPage:hover h1 {
      color: ${theme.colors.background.light};
      background: ${theme.colors.primary.dark};
    }

    & a:hover h1 {
      color: ${theme.colors.primary.dark};
    }

    @media screen and (max-width: 600px) {
      & h1 {
        padding: 0 ${theme.spacing.small};
      }

      & nav {
        width: 100%;
        margin-top: ${theme.spacing.small};
        padding: 0 ${theme.spacing.small};
      }
    }
  `}
`;
