# taro3微信小程序开发

## 开发环境

- taro 3.4.7
- vue ^3.2.24
- node 16.14.0
- typescript ^4.1.0
- pinia ^2.0.6

## 使用Vscode开发，并安装以下插件

- Eslint
- Prettier
- Volar

## 如何使用

1. 克隆项目,并安装依赖，运行开发脚本
```shell
  git clone http://xxxx
  npm install
  npm run dev:weapp
```

2. 打开微信开发工具 项目目录指向 dist 目录 填写自己的 AppId

## 当前实现了的功能

- Taro3 Vue3 Ts Pinia（由taro cli 官方模板生成）
- 组件库 NutUI
- 小程序分包配置
- Eslint Prettier CommitLint
- Vue DevTools 调试
- 苹果底部安全区域适配，预留1px

## 组件库 NutUI 安装

> [Nutui](https://nutui.jd.com/#/) 京东风格的轻量级移动端 Vue 组件库

```shell
npm install @nutui/nutui-taro @tarojs/plugin-html -S
```

- 按需加载
- 定制主题色

> [官方配置文档](https://taro-docs.jd.com/taro/docs/nutui#%E6%8C%89%E7%85%A7%E4%B8%8B%E6%96%B9%E5%9B%BE%E7%89%87%E4%BE%9D%E6%AC%A1%E9%80%89%E6%8B%A9%E9%80%89%E6%8B%A9-vue3--nutui-%E6%A8%A1%E6%9D%BF)

后期使用新组件，需要在nuiui/index里面添加对应的组件
```ts
import { Icon, Button } from "@nutui/nutui-taro";
import { App } from "vue";
const setNutUi = (app: App) => {
  app.use(Icon).use(Button);
};
```

## 小程序分包配置

目前小程序分包大小有以下限制：

整个小程序所有分包大小不超过 20M
单个分包/主包大小不能超过 2M

小程序分包好处：
- 按需加载
- 避免主包不能超过2M的游戏规则

目录结构如下：
```shell
├── config
├── src
|   ├── pages
|   |   └── index
|   ├── moduleA
|   |   └── pages
|   |       ├── pageA
|   |       └── pageB
|   ├── moduleB
|   |   └── pages
|   ├── app.css
|   ├── app.json
|   └── app.js
└── package.json
```
通过在 app.json 的 subpackages 字段中
```shell
{
  "pages": [
    "pages/index"
  ],
  "subpackages": [
    {
      "root": "moduleA",
      "pages": [
        "pages/pageA",
        "pages/pageB"
      ]
    }, {
      "root": "moduleB",
      "pages": [],
    }
  ]
}
```

## Eslint Prettier CommitLint

1. 安装vscode 插件 eslint prettier volar
2. npm install @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-plugin-prettier -D
3. 项目根目录配置.eslintrc.js .prettierrc.js
4. 配置vue-tsc   ts check   
5. 在 package.json 中 script 添加命令
```shell
"scripts":{
  "tsc": "vue-tsc --noEmit --skipLibCheck",
  "lint": "eslint --ext .vue --ext .js --ext .ts src/"
}
```
其中出现报错
> TypeScript intellisense is disabled on template, you can tsconfig `"jsx": "preserve"` in tsconfig or jsconfig to enable it, or config `vueCompilerOptions.experimentalDisableTemplateSupport` to disable this prompt.volar

配置tsconfig.json `"jsx": "preserve"` 处理
6. 安装husky
```shell
  npm install husky -D
  npx husky install
  npx husky add .husky/pre-commit "echo test"
```