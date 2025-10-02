module.exports = {
  env: 
  { 
    browser: true, es2022: true 
  },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist", ".eslintrc.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-var": "warn",
  },
};