module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['npm run lint'],
  // 写成函数回调才正常
  'src/**/*.{vue,ts}': [() => 'npm run tsc'],
};
