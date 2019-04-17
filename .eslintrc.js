module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // no-var
    'no-var': 'error',
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never'],
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    'indent': ['error', 2, {'SwitchCase': 1}],
    "linebreak-style": [0 ,"error", "windows"],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
