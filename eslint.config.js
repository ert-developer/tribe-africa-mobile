module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // If using TypeScript
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint', // Remove if not using TypeScript
    'import',
    'react-native', // For React Native specific linting
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed for Expo
    'react/prop-types': 'off', // Disable if not using prop-types
    '@typescript-eslint/explicit-module-boundary-types': 'off', // For easier TypeScript use
    'import/no-unresolved': 'off', // Allows importing Expo modules without path resolution issues
    'react-native/no-unused-styles': 'warn', // Expo-specific: warn about unused styles
    'react-native/split-platform-components': 'warn', // Warn about platform-specific code (e.g., iOS vs Android)
    'react-native/no-inline-styles': 'warn', // Warn about inline styles in JSX
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
