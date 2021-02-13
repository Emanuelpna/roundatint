import styled, { css } from "styled-components";

export const ColorList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacing.xxlarge};

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
    color: ${theme.colors.gray.main};
    font-size: ${theme.font.sizes.xmedium};
    padding-left: ${theme.spacing.regular};
    margin-bottom: ${theme.spacing.regular};
    border-bottom: 2px solid ${theme.colors.gray.light};
  `}
`;
