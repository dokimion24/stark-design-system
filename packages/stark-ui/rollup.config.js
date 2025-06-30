import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import baseConfig from '../shared-config/rollup.config.js';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default {
  ...baseConfig,
  input: {
    Avatar: './src/components/Avatar/index.tsx',
    Button: './src/components/Button/index.tsx',
    Checkbox: './src/components/Checkbox/index.tsx',
    Dropdown: './src/components/Dropdown/index.tsx',
    Input: './src/components/Input/index.tsx',
    Modal: './src/components/Modal/index.tsx',
    Portal: './src/components/utils/Portal/index.tsx',
    Switch: './src/components/Switch/index.tsx',
    Toast: './src/components/Toast/index.tsx',
    Tooltip: './src/components/Tooltip/index.tsx',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].js',
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    ...baseConfig.plugins,
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'runtime',
      presets: [['react-app', { flow: false, typescript: true }]],
    }),
    alias({
      entries: [
        { find: '@', replacement: path.join(__dirname, './src') },
        {
          find: '@styled-system',
          replacement: path.join(__dirname, './styled-system'),
        },
      ],
    }),
  ],
};
