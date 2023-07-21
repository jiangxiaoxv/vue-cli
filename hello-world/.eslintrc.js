/* module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
 */
module.exports = {
  // 告诉eslint代码运行环境，像document，未声明会报错的；env里面的全局变量不会报错
  env: {
    browser: true,
    commonjs: true, // __dirname 未声明不会报错
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  root: true, // 告诉eslint只要检查到该配置文件所在的目录的所有文件即可，没必要去检查用户根目录
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'], // standard规范也会对env做一些兼容['eslint:all', 'eslint:recommended', 'standard']
  // extends: ['plugin:vue/essential', 'standard'], // standard规范也会对env做一些兼容['eslint:all', 'eslint:recommended', 'standard']
  parser: 'vue-eslint-parser',
  parserOptions: {
    // ecmaVersion: 6, // ecma版本，使用es版本检查代码
    ecmaVersion: 2020,
    // 一个对象，指定要使用哪些附加语言功能
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  globals: {
    $: true, // 生命类似的全局变量，类似于window
    //   $: false, // false只能访问，不能修改 $ = 1
  },
  plugins: ['vue'],

  rules: {
    'no-unused-vars': [1],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: [0],
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': [0],
    'vue/html-closing-bracket-newline': ['error'],
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': [0],
    'space-before-function-paren': 0,
    'comma-dangle': 0,
  },
}
