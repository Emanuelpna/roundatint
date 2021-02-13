import styled, { css } from "styled-components";

export const ColorList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
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
