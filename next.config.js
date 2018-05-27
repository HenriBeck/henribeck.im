const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(ttf|eot|svg|woff(2)?)(\?.+)?$/, // eslint-disable-line unicorn/no-unsafe-regex
      loader: 'file-loader',
    });

    return config;
  },
});
