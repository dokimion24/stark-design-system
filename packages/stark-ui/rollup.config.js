import alias from '@rollup/plugin-alias';
import path from 'path';
import baseConfig from '../shared-config/rollup.config.js';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default {
  ...baseConfig,
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
