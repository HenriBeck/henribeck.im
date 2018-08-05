// @flow

const merge = require('webpack-merge');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.common.config');

module.exports = merge(config, {
  mode: 'production',

  plugins: [
    // Create a report on how many bytes are being used
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
    // Service worker
    new SWPrecacheWebpackPlugin({
      cacheId: 'henribeck-website',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /[\w\d]{8}/,
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
    }),
  ],
});
