import { createFont } from 'tamagui';

// TO DO: FIND A BETTER WAY TO SUPPORT MOBILE ALSO

const headingFont = createFont({
  family: 'var(--archivo)',

  size: {
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 30,
    '2xl': 36,
    '3xl': 48,
    '4xl': 60,
    '5xl': 60,
    '6xl': 60,
    true: 20, // this is required to set just prop size and get default value
  },

  // TO DO: Check how to apply bold to native
  // face: {
  //   700: { normal: 'Archivo-Bold' },
  // },
});

const bodyFont = createFont({
  family: 'var(--public-sans)',
  size: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    true: 16, // this is required to set just prop size and get default value
  },

  // TO DO: Check how to apply bold to native
  // face: {
  //   700: { normal: 'PublicSans-Bold' },
  // },
});

export const fonts = {
  body: bodyFont,
  heading: headingFont,
};
