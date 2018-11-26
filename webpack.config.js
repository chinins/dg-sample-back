import path from 'path';

import webpack from 'webpack';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

import pkg from './package.json';
import './env';

const IS_DEV = process.env.NODE_ENV === 'development';

console.log('process.env.NODE_ENV: %s\n', process.env.NODE_ENV);

export default {
  target: 'node',
  entry: {
    index: path.resolve(__dirname, 'src', 'index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: IS_DEV ? 'development' : 'production',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/esm',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: pkg.babel
        }
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  externals: [nodeExternals()]
};
