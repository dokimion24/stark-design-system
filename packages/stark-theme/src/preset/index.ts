import { definePreset } from '@pandacss/dev';

import { colorTokenList } from '../config/colorTokenList.ts';
import { semanticTokens, textStyles, tokens } from '../tokens/index.ts';

export const pandaPreset = definePreset({
  name: 'custom-panda-preset',
  theme: {
    tokens,
    textStyles,
    semanticTokens,
  },
  staticCss: {
    css: [
      {
        properties: {
          color: colorTokenList,
          background: colorTokenList,
          textStyle: Object.keys(textStyles),
        },
      },
    ],
  },
});
