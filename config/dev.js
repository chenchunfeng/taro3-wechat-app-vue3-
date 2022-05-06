const args = process.argv;
const isOpenDevTools = args.includes('--devtools');

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {},
  plugins: isOpenDevTools ? ['@tarojs/plugin-vue-devtools'] : [],
};
