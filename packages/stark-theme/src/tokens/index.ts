import { defineTokens } from '@pandacss/dev';

import { colors, gradients } from './color.ts';
import { radii } from './radius.ts';
import { shadows } from './shadows.ts';
import { spacing } from './space.ts';

export const tokens = defineTokens({
  colors,
  gradients,
  spacing,
  shadows,
  radii,
});

export * from './color.ts';
export * from './typography.ts';
