module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    plugins: ["react", "import", "jsx-a11y"],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      "react/prop-types": 0,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      "@typescript-eslint/no-explicit-any": "off",
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      "indent": ["error", 2],
      "linebreak-style": 1,
      "react/no-unknown-property": ['error', { ignore: ['css'] }]
    },
  };
  
