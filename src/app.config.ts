export default {
  // 主包配置
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    // 分包配置
    {
      root: 'moduleA',
      pages: ['pages/nutui/index'],
    },
  ],
};
