export type BreakpointsKeys = "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: Record<BreakpointsKeys, number> = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;
