export const theme = {
  grid: {
    columns: 12,
    container: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1200,
    },
    gutter: "3.2rem",
  },
  colors: {
    background: {
      dark: "#1C2826",
      main: "#FFF9FB",
      light: "#FFFFFF",
    },
    primary: {
      dark: "#63171b",
      main: "#D33F49",
      light: "#dc6a72",
    },
    secondary: {
      dark: "#329550",
      main: "#6FD08C",
      light: "#90daa6",
    },
    gray: {
      darker: "#0b0c0e",
      dark: "#121317",
      main: "#262730",
      light: "#4d4f60",
      lighter: "#a5a7b6",
      lightest: "#f4f4f6",
    },
  },
  border: {
    radius: "6px",
    focus: "1px solid #D33F49",
    normal: "1px solid #262730",
    disabled: "1px solid #a5a7b6",
  },
  font: {
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      small: "1.4rem",
      regular: "1.6rem",
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
    elevation1: "0 2px 10px rgba(18, 19, 23, .28)",
    elevation2: "0 4px 12px rgba(18, 19, 23, .28)",
    elevationContrast1: "0 2px 10px rgba(18, 19, 23, .16)",
    elevationContrast2: "0 4px 12px rgba(18, 19, 23, .16)",
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
