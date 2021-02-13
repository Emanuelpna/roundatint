import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* bitter-regular - latin */
    @font-face {
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/bitter-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/bitter-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* bitter-700 - latin */
    @font-face {
    font-family: 'Bitter';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/bitter-v17-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/bitter-v17-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* karla-regular - latin */
    @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/karla-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/karla-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* karla-700 - latin */
    @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/karla-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/karla-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      color: ${theme.colors.gray.main};
      font-family: ${theme.font.family.text};
      font-size: ${theme.font.sizes.regular};
      background: ${theme.colors.background.main};
    }
  `}
`;
