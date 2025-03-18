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
    };
    media: {
      small: string;
      preMedium: string;
      medium: string;
      preLarge: string;
      large: string;
    };
  }
}
