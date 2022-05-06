import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './app.scss';

import setNutUi from './nutui/index';

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(createPinia());

// 按需加载nut ui
setNutUi(App);
export default App;
