import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
    }),
    postcss({
      include: ['**/*.css'],
      extract: true,
      inject: true,
      modules: false,
			plugins: [
        postcssImport() 
      ],
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
