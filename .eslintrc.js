module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // Require or disallow trailing commas.
    "comma-dangle": ["error", {
      arrays: 'always',
      objects: 'always',
      imports: 'always',
      exports: 'always',
      functions: 'never',
    }],
    "semi": 0
  }
};