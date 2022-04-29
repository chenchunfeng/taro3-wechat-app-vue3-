module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript',
    'taro/vue3',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  globals: {
    wx: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-debugger': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'], //禁止使用any
    eqeqeq: 'error', //必须使用全等
    'max-lines': ['error', 500], //限制行数 请勿修改 请优化你的代码
    complexity: ['error', 5], // 限制复杂度
    'require-await': 'error',
  },
};
//可以添加规则 禁止删除忽略规则 请严格执行
