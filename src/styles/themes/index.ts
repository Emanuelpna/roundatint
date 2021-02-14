import { breakpoints } from "./breakpoints/base";

export const theme = {
  grid: {
    columns: 12,
    containers: breakpoints,
    gutter: "3.2rem",
  },
  colors: {
    background: {
      dark: "#080707",
      main: "#FFF9FB",
      light: "#FFFFFF",
    },
    primary: {
      dark: "#98211F",
      main: "#D33F49",
      light: "#DB6169",
    },
    secondary: {
      dark: "#34A860",
      main: "#6FD08C",
      light: "#8BDAA3",
    },
    gray: {
      darker: "#080707",
      dark: "#342D30",
      medium: "#605254",
      light: "#8C7881",
      lighter: "#B2A4AA",
      lightest: "#FDFCFC",
    },
  },
  border: {
    radius: "6px",
    focus: "1px solid #D33F49",
    normal: "1px solid #342D30",
    disabled: "1px solid #B2A4AA",
  },
  font: {
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      small: "1.4rem",
      regular: "1.8rem",
      medium: "2.0rem",
      xmedium: "2.4rem",
      large: "3.0rem",
      xlarge: "3.6rem",
      xxlarge: "4.8rem",
    },
    family: {
      display:
        "'Bitter', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
      text:
        "'Karla', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    },
  },
  shadows: {
    elevation1: "0 4px 12px rgba(52, 45, 48, .20)",
    elevation2: "0 6px 16px rgba(52, 45, 48, .28)",
    elevationContrast1: "0 4px 12px rgba(52, 45, 48, .16)",
    elevationContrast2: "0 6px 16px rgba(52, 45, 48, .16)",
  },
  spacing: {
    xxsmall: "0.8rem",
    xsmall: "1.2rem",
    small: "1.6rem",
    regular: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;
