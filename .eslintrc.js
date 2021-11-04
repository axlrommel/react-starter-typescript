module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'deprecation', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    jasmine: true,
    es6: true,
  },
  rules: {
    // 0 = off; 1 = warning; 2 = error
    'no-unused-vars': 0, // Disabled due to bug. links to two bugs found below.
    // https://github.com/typescript-eslint/typescript-eslint/issues/363
    // https://github.com/typescript-eslint/typescript-eslint/issues/379
    'no-console': 1,
    'no-undef': 0,
    'no-extra-boolean-cast': 1,
    'no-useless-catch': 0,
    'no-useless-escape': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 1,
    'deprecation/deprecation': 'warn',
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
  },
  overrides: [
    {
      files: ['*.spec.tsx', '*.spec.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-empty': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'no-undef': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};