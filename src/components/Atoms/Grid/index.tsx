import styled, { css } from "styled-components";

import { BreakpointsKeys } from "/@/styles/themes/breakpoints/base";

import { mediaBreakpoints } from "/@/styles/services/mediaBreakpoints";


const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.grid.gutter};
    grid-template-columns: repeat(${theme.grid.columns}, 1fr);
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacing.medium};

    ${mediaBreakpoints({
      xs: css`
        max-width: initial;
        padding: 0 ${theme.spacing.xsmall};
      `,
      sm: css`
        max-width: ${theme.grid.containers.sm}px;
      `,
      md: css`
        padding: 0 ${theme.spacing.regular};
        max-width: ${theme.grid.containers.md}px;
      `,
      lg: css`
        max-width: ${theme.grid.containers.lg}px;
      `,
      xl: css`
        max-width: ${theme.grid.containers.xl}px;
      `,
    })}
  `}
`;

type ColumnProps = {
  offset?: Partial<Record<BreakpointsKeys, number>>;
  spanRows?: Partial<Record<BreakpointsKeys, number>>;
};

const Column = styled.div<ColumnProps>`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  ${({ spanRows, offset }) => {
    if (typeof spanRows === "number") {
      return css`
        grid-column: span ${spanRows};
      `;
    }

    return mediaBreakpoints({
      ...(spanRows?.xs && {
        xs: css`
          grid-column-end: span ${spanRows.xs};
          grid-column-start: ${offset?.xs ? offset.xs + 1 : "auto"};
        `,
      }),
      ...(spanRows?.sm && {
        sm: css`
          grid-column-end: span ${spanRows.sm};
          grid-column-start: ${offset?.sm ? offset.sm + 1 : "auto"};
        `,
      }),
      ...(spanRows?.md && {
        md: css`
          grid-column-end: span ${spanRows.md};
          grid-column-start: ${offset?.md ? offset.md + 1 : "auto"};
        `,
      }),
      ...(spanRows?.lg && {
        lg: css`
          grid-column-end: span ${spanRows.lg};
          grid-column-start: ${offset?.lg ? offset.lg + 1 : "auto"};
        `,
      }),
      ...(spanRows?.xl && {
        xl: css`
          grid-column-end: span ${spanRows.xl};
          grid-column-start: ${offset?.xl ? offset.xl + 1 : "auto"};
        `,
      }),
    });
  }}
`;

export const Grid = {
  Column,
  Container,
};
