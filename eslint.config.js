const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
      'no-duplicate-imports': 'error',
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
      'react/jsx-fragments': ['error', 'element'],
      'react/self-closing-comp': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unused-state': 'error',
      'react/no-unused-prop-types': 'error',
    },
  },
];
