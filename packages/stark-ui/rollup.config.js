import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import baseConfig from '../shared-config/rollup.config.js';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const components = [
  'Avatar',
  'Button',
  'Checkbox',
  'Dropdown',
  'Input',
  'Portal',
  'Switch',
  'Tooltip',
];

const input = {};
components.forEach((comp) => {
  input[comp] = `src/components/${comp}/index.tsx`;
});

export default {
  ...baseConfig,
  input,
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
