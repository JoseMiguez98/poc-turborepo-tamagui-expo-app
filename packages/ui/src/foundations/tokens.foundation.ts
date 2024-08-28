import { createTokens } from '@tamagui/core';
import { radius, size, space, zIndex } from '@tamagui/themes';
import { colors } from './colors.foundation';

export const tokens = createTokens({
  color: colors,
  radius: {
    ...radius,
    sm: 4,
    md: 8,
    lg: 12,
  },
  zIndex,
  space: {
    ...space,
    sm: 15,
    md: 20,
    lg: 25,
    xxl: 225,
  },
  size: {
    ...size,
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 46,
    lg: 60,
  },
});
