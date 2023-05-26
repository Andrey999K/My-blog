module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "public/",
    "build/",
    "*.min.js",
    "src/dev/"
  ],
  rules: {
    "semi": [2, "always"],
    "space-before-function-paren": ["error", "never"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "off"
  }
};
