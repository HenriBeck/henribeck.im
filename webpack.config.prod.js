const merge = require('webpack-merge');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { BundleAnalyzerPlugin } = require('bundle-analyzer-plugin')

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',

  plugins: [
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
