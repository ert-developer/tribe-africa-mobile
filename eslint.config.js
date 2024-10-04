import { FlatCompat } from '@eslint/eslintrc';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const compat = new FlatCompat({
  baseDirectory: import.meta.url, // required for extending configs in flat config
});

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // No need for React import in JSX
      'react/prop-types': 'off', // Disable prop-types validation
      'react-hooks/rules-of-hooks': 'error', // Check rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
    },
  },
  ...compat.extends('eslint:recommended', 'plugin:react/recommended'), // Use ESLint and React recommended rules
];
