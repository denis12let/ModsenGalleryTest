import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      orange: string;
      white: string;
      black: string;
      milk: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
      not_found: string;
    };
    fontSizes: {
      small: string;
      normal: string;
    };
    fontWeights: {
      400: number;
      500: number;
      600: number;
      700: number;
    };
    gradients: {
      background: string;
    };
    shadows: {
      semiTransparent: string;
    };
    sizes: {
      modal: {
        width: string;
        heigth: string;
      };
      container: {
        width: string;
      };
      header: {
        height: string;
      };
      footer: {
        heigth: string;
      };
    };
    media: {
      small: string;
    };
  }
}
