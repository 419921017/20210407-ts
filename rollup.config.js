const path = require('path');
const resolveNode = require('@rollup/plugin-node-resolve');
const resolveTypescript = require('rollup-plugin-typescript2');

const server = require('rollup-plugin-server');

export default {
  input: path.resolve('src/index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourceMap: true,
  },
  plugins: [
    resolveNode.nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    resolveTypescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    server({
      port: 3001,
      contentBase: '',
      openPage: '/public/index.html',
    }),
  ],
};
