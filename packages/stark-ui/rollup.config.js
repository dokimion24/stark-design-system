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
    Portal: './src/components/utils/Portal/index.tsx',
    Switch: './src/components/Switch/index.tsx',
  },
  output: [
    {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
    },
    {
      format: 'cjs',
      dir: 'dist',
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    ...baseConfig.plugins,
    typescript(),
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
