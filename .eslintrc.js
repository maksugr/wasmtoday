module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:flowtype/recommended'
  ],
  plugins: ['flowtype'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  globals: {
    'graphql': true
  }
};