// @flow

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        // Cache the node_modules
        vendors: {
          name: 'vendors',
          test: /.+node_modules.+\.js$/,
          chunks: 'all',
          enforce: true,
        },

        styles: {
          // Bundle all of the css into one file
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false },
        },
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
      // eslint-disable-next-line camelcase
      short_name: 'Henri Beck',
      description: 'Personal Website of Henri Beck',
      // eslint-disable-next-line camelcase
      background_color: ACTIVE_COLOR,
      // eslint-disable-next-line camelcase
      theme_color: ACTIVE_COLOR,
      'theme-color': ACTIVE_COLOR,
      // eslint-disable-next-line camelcase
      start_url: '/',
    }),
  ],

  resolve: { extensions: ['.js', '.jsx'] },
};
