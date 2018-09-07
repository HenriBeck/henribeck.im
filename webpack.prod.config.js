// @flow

const merge = require('webpack-merge');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

const config = require('./webpack.common.config');

module.exports = merge(config, {
  mode: 'production',

  plugins: [
    new CompressionPlugin({ include: /\.js$/ }),
    // Service worker
    new SWPrecacheWebpackPlugin({
      cacheId: 'henribeck-website',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /[\w\d]{8}/,
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
    }),
    // Create a report on how many bytes are being used
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
    // Write the stats (bundle names and paths to a file to be used when server side rendering)
    new StatsWriterPlugin({ filename: 'asset-stats.json' }),
  ],
});
