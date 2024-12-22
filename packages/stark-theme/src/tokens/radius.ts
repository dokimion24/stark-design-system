import { defineTokens } from '@pandacss/dev';
import { radius } from 'starkds-tokens';

export const radii = defineTokens.radii({
  none: { value: radius.none },
  xs: { value: radius.xs },
  sm: { value: radius.sm },
  md: { value: radius.md },
  lg: { value: radius.lg },
  xl: { value: radius.xl },
  full: { value: radius.full },
});
