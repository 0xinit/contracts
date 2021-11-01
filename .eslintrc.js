module.exports = {
  "extends" : [
    "standard",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:node/recommended",
  ],
  "plugins": [
    "mocha-no-only",
    "promise",
  ],
  "env": {
    "browser" : true,
    "node"    : true,
    "mocha"   : true,
    "jest"    : true,
  },
  "globals" : {
    "artifacts": false,
    "contract": false,
    "assert": false,
    "web3": false,
    "usePlugin": false,
    "extendEnvironment": false,
  },
  "rules": {

    // Strict mode
    "strict": ["error", "global"],

    // Code style
    "array-bracket-spacing": ["off"],
    "camelcase": ["error", {"properties": "always"}],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "dot-notation": ["error", {"allowKeywords": true, "allowPattern": ""}],
    "eol-last": ["error", "always"],
    "eqeqeq": ["error", "smart"],
    "generator-star-spacing": ["error", "before"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", 120, 2],
    "no-debugger": "off",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-redeclare": ["error", {"builtinGlobals": true}],
    "no-trailing-spaces": ["error", { "skipBlankLines": false }],
    "no-undef": "error",
    "no-use-before-define": "off",
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "always"],

    "mocha-no-only/mocha-no-only": ["error"],

    "promise/always-return": "off",
    "promise/avoid-new": "off",
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
    {
      files: ["scripts/**"],
      rules: { "no-process-exit": "off" },
    },
    {
      files: ["hardhat.config.js", "scripts/**", "test/**"],
      rules: { "node/no-unpublished-require": "off" },
    },
  ]
}