module.exports = {
  extends: [
    'henribeck',
    'henribeck/client',
    'henribeck/react',
    'henribeck/flow'
  ],

  rules: {
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
  },
};