import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import { pandaPreset } from 'starkds-theme';

const globalCss = defineGlobalStyles({
  body: {
    div: 'border-box',
    button: 'border-box',
  },
});

export default defineConfig({
  presets: [pandaPreset],
  globalCss,
  preflight: true,
  minify: true,
  outExtension: 'js',
  polyfill: true,
  jsxFramework: 'react',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
});
