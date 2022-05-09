export default {
  // 主包配置
  pages: ['pages/index/index', 'pages/css/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    // 分包配置
    {
      root: 'subPackages/moduleA',
      pages: ['pages/nutui/index', 'pages/request/index'],
    },
  ],
};
