import { rem } from "polished";

export const theme = {
  colors: {
    black: '#000',
    white: '#FFF',
    grays: {
      300: '#D1D5DB',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
    },
    error: '#FC3D21',
  },
  shadows: {
    sm: '0px 1px 2px rgba(0, 0, 0, 0.05);',
  },
  fontSizes: {
    default: {size: rem('14px'), lineHeight: '1.43'},
    m: {size: rem('16px'), lineHeight: '1.5'},
    xl: {size: rem('30px'), lineHeight: '1.2'},
  },
  fontFamilies: {
    default: '"Inter", sans-serif',
  },
  fontWeights: {
    light: 400,
    regular: 500,
    bold: 800,
  },
  borders: {
    base: rem('6px'),
  },
  screens: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  }
};