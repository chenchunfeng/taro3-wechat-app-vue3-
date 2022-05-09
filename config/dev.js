const args = process.argv;
const isOpenDevTools = args.includes('--devtools');

const isH5 = process.env.TARO_ENV === 'h5';
const HOST = '"https://blm-mrb.dev.bzlrobot-ift.com"';

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    HOST: isH5 ? '""' : HOST,
  },
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://blm-mrb.dev.bzlrobot-ift.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
  plugins: isOpenDevTools ? ['@tarojs/plugin-vue-devtools'] : [],
};
