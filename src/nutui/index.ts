// 定制化主题必须使用 scss
import '@nutui/nutui-taro/dist/styles/themes/default.scss';
// import "@nutui/nutui-taro/dist/style.css";
import { Icon, Button } from '@nutui/nutui-taro';
import { App } from 'vue';
const setNutUi = (app: App) => {
  app.use(Icon).use(Button);
};
export default setNutUi;
