import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';

export default {
  input: 'src/index.js',
  output:
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
      exports: 'named'
    },
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
			limit: 0,
    }),
		postcss({
      extract: 'index.css',
      minimize: true,
      plugins: [cssnano()],
    }),
    resolve({ extensions: ['.js', '.jsx'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
  ]
};
