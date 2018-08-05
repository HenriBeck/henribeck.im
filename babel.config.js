// @flow

module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      targets: {
        chrome: 67,
        firefox: 61,
      },
    }],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],

  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    ['import', {
      libraryName: 'antd',
      style: 'css',
    }],
  ],
};