import { css, FlattenSimpleInterpolation } from "styled-components";

import {
  breakpoints,
  BreakpointsKeys,
} from "/@/styles/themes/breakpoints/base";

/**
 * Objeto com chave sendo uma BreakpointKey e valor sendo o valor de retorno da função `css` do styled-components
 * Partial faz com que todas as opções sejam opcionais e vc não precise definir todos os breakpoints sempre
 */
type CssByBreakpointType = Partial<
  Record<BreakpointsKeys, FlattenSimpleInterpolation | Record<string, string>>
>;

export function mediaBreakpoints(cssByBreakpoint: CssByBreakpointType) {
  const breakpointsNames = Object.keys(breakpoints) as BreakpointsKeys[];

  return breakpointsNames.map(
    (breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `
  );
}
