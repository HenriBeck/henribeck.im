module.exports = {
  extends: [
    'henribeck',
    'henribeck/client',
    'henribeck/react',
    'henribeck/flow'
  ],

  rules: {
    'react/default-props-match-prop-types': 'off',
  },

  overrides: [{
    files: ['flow-typed/*.js'],

    rules: { 'import/unambiguous': 'off' },
  }],
};