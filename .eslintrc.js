module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-throw-literal': 'off',
    'dot-notation': 'off',
    'consistent-return': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
  },
};
