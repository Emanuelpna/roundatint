import styled, { css } from "styled-components";

export const Content = styled.article`
  ${({ theme }) => css`
    margin: auto;
    max-width: 65ch;
    margin-top: 6rem;
    margin-bottom: 12rem;
    padding-right: ${theme.spacing.large};

    @media screen and (max-width: 768px) {
      padding: 0 ${theme.spacing.large};
    }

    & h2 {
      line-height: 1.2;
      margin: ${theme.spacing.medium} 0;
      color: ${theme.colors.primary.main};
      font-size: ${theme.font.sizes.xlarge};
      padding-right: ${theme.spacing.xlarge};
      font-family: ${theme.font.family.display};
    }

    @media screen and (max-width: 768px) {
      & h2 {
        padding-right: ${theme.spacing.small};
      }
    }

    & h3 {
      line-height: 1.2;
      margin: ${theme.spacing.regular} 0;
      font-size: ${theme.font.sizes.xmedium};
      font-family: ${theme.font.family.text};
      padding-right: ${theme.spacing.xxlarge};
    }

    & p {
      line-height: 1.5;
      margin: ${theme.spacing.small} 0;
      font-size: ${theme.font.sizes.regular};
      font-family: ${theme.font.family.text};
    }

    & a:hover {
      line-height: 1.2;
      color: ${theme.colors.primary.dark};
      font-size: ${theme.font.sizes.regular};
      font-family: ${theme.font.family.text};
    }

    & a {
      line-height: 1.2;
      color: ${theme.colors.primary.main};
      font-size: ${theme.font.sizes.regular};
      font-family: ${theme.font.family.text};
    }

    & img {
      max-width: 80%;
      margin: ${theme.spacing.regular} 0;
      border-radius: ${theme.border.radius};
      box-shadow: ${theme.shadows.elevation1};
    }

    & code {
      margin: 0 0.4rem;
      padding: 0.6rem 0.8rem;
      color: ${theme.colors.gray.lightest};
      border-radius: ${theme.border.radius};
      box-shadow: ${theme.shadows.elevation1};
      background: ${theme.colors.background.dark};
    }
  `}
`;
