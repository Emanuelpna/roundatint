import styled, { css } from "styled-components";

export const ColorList = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, min-content));
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      gap: ${theme.spacing.xlarge};
    }

    @media screen and (max-width: 992px) {
      gap: ${theme.spacing.large};
    }

    @media screen and (max-width: 768px) {
      gap: ${theme.spacing.xxsmall};
    }

    @media screen and (max-width: 500px) {
      gap: 0;
    }
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.gray.dark};
    font-size: ${theme.font.sizes.xmedium};
    padding-left: ${theme.spacing.xsmall};
    border-left: 4px solid ${theme.colors.gray.dark};
  `}
`;
