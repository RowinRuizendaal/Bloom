module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // eslint-disable-next-line max-len
  extends: ["plugin:vue/essential", "plugin:vue/base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
