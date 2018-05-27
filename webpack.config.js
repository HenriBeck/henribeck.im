const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { colors } = require('materialize-react');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: 'file-loader',
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
      new OptimizeCSSAssetsPlugin({}),
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
      background_color: colors.blue['500'],
      theme_color: colors.blue['500'],
      'theme-color': colors.blue['500'],
      start_url: '/',
    }),
  ],

  resolve: { extensions: ['.js', '.jsx'] },
};
