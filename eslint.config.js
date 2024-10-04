import prettierPlugin from 'eslint-plugin-prettier'; // Use import for ES modules

export default [
  {
    files: ['*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: prettierPlugin, // Directly reference the imported plugin
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
    },
  },
];
