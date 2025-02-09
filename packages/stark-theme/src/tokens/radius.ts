import { defineTokens } from '@pandacss/dev';
import { radius } from 'starkds-tokens';

export const radii = defineTokens.radii({
  none: { value: radius.none },
  xxs: { value: radius.xxs },
  xs: { value: radius.xs },
  sm: { value: radius.sm },
  md: { value: radius.md },
  lg: { value: radius.lg },
  xl: { value: radius.xl },
  '2xl': { value: radius.xl2 },
  '3xl': { value: radius.xl3 },
  '4xl': { value: radius.xl4 },
  full: { value: radius.full },
});
