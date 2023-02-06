const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    'cypress/globals': true,
    serviceworker: true,
  },
  plugins: [
    'react',
    'import',
    'cypress',
    '@typescript-eslint',
    'react-hooks',
    'no-only-tests',
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-case-declarations': 0,
    'react/jsx-no-bind': 0,
    'react/display-name': 0,
    'new-cap': 0,
    'no-unexpected-multiline': 0,
    'no-class-assign': 1,
    'no-console': 2,
    'object-curly-spacing': [1, 'always'],
    'import/first': 2,
    'import/default': 0,
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-extra-boolean-cast': 0,
    'import/named': 0,
    'import/namespace': [
      2,
      {
        allowComputed: true,
      },
    ],
    'import/no-duplicates': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/no-children-prop': 1,
    'react/no-deprecated': 1,
    'import/no-cycle': 1,
    'import/no-self-import': 1,
    indent: 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'interface-over-type-literal': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/prefer-interface': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 1,
    'react-hooks/rules-of-hooks': 'error',
    // disable as it can cause more harm than good
    //'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-empty-function': 1,
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@woovi/**/src'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'no-multiple-empty-lines': 2,
  },
  settings: {
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};
