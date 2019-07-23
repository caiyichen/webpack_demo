module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "no-case-declarations": 0,
    "space-infix-ops": 1,
    "react/prefer-stateless-function": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-new": 0,
    "no-console": 0,
    "comma-dangle": 0,
    "max-len": ["error", 200]
    // 'prettier/prettier': 1,
    // 'prefer-promise-reject-errors': 0,
    // 'react/no-deprecated': 1,
  },
  globals: {
    module: false
  }
};
