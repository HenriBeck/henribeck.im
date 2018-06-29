const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ACTIVE_COLOR = '#1890ff';

module.exports = {
  entry: { app: path.resolve(__dirname, 'src/index.js') },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: { minimize: true },
      }],
    }],
  },

  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new WebpackPwaManifest({
      name: 'Henri Beck',
      short_name: 'Henri Beck',
      description: 'Personal Website of Henri Beck',
      background_color: ACTIVE_COLOR,
      theme_color: ACTIVE_COLOR,
      'theme-color': ACTIVE_COLOR,
      start_url: '/',
    })
  ],

  resolve: { extensions: ['.js', '.jsx'] },
};
