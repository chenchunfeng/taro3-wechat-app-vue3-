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
- Eslint Prettier Husky Lint-Staged CommitLint
- 根据commit记录生成changelog
- 版本发布标准自动化（standard-version） <b>TODO</b>
- Vue DevTools 调试
- 苹果底部安全区域适配，预留1px
- request 封装
- pinia 状态管理demo
- 全局样式配置

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
|   |── subPackages
|   |   ├── moduleA
|   |   |   └── pages
|   |   |       ├── pageA
|   |   |       └── pageB
|   |   ├── moduleB
|   |   |   └── pages
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

## Eslint Prettier Husky Lint-Staged CommitLint

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

方便使用git 的pre commit钩子
```shell
  npm install husky -D
  npx husky install
  npx husky add .husky/pre-commit "echo test"
```

7. 安装lint-staged 修改husky pre-commit

lint-staged能够让lint只检测暂存区的文件

```shell
npm install lint-staged  -D

# pre-commit
echo "---lint检查开始---"
npx lint-staged
echo "---lint检查结束---"

# 配置.lintstatedrc.js 执行校验指令
module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['npm run lint'],
  'src/**/*.{vue,ts}': ['npm run tsc'],
};
```
8. 安装commit lint
   
```shell
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install @commitlint/config-conventional  @commitlint/cli -D
# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
# Add hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

遇到的问题
>使用 commitlint 时报错：commitlint.config.js:1 SyntaxError: Invalid or unexpected token
原来是因为用 echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js 这条命令
生成的 commitlint.config.js 文件不是 utf8 格式的，将文件转成 utf8 格式的就没问题了

8. 扩展 git cz  commitizen 安装
```shell
# 第一步：全局安装commitizen，安装命令如下。
npm install commitizen -g
# 第二步：在项目目录里，运行下面的命令, 初始化cz-conventional-changelog
commitizen init cz-conventional-changelog --save --save-exact
# 第三步：package.json 配置
scripts: {
  "push": "git add . && cz && git push"
}
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog-zh"
    # 中文翻译包 npm i cz-conventional-changelog-zh -D
    "path": "./node_modules/cz-conventional-changelog-zh"
  }
},
 
```
最后，将之前符合Angular规范的cz-conventional-changelog适配器路径改成cz-customizable适配器路径：cz-customizable默认会去读取项目中 .cz-config.js配置
W
[cz-config-EXAMPLE.js](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)

```shell
npm install cz-customizable -D
# 改写配置commitizen package.json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}


```



好吧，还有最后最后，commitlint 的规则被修改了，也要使用适配器
```shell
npm install commitlint-config-cz -D
# 改写配置commitlint.config.js
module.exports = { 
  # // extends: ['@commitlint/config-conventional']
  extends: ['cz']
};
```
## 根据commit记录生成changelog

生成日志
```shell
# 也可以全局安装
npm install conventional-changelog-cli -D
"changelog": "npx conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
```

- 基本使用
  >-p angular | atom 用来指定使用的 commit message 标准
  >-i CHANGELOG.md 表示从 CHANGELOG.md 读取 changelog
  >-s 表示读写 changelog 为同一文件
  >-r 表示生成 changelog 所需要使用的 release 版本数量，默认为1，全部则是0

- 自定义参数
  > todo

## 版本发布标准自动化（standard-version）

standard-version 是一款遵循语义化版本（ semver）和 commit message 标准规范 的版本和 changelog 自动化工具
todo  大概流程就是

参考 https://www.csdn.net/tags/NtTaYgwsMjQwNTctYmxvZwO0O0OO0O0O.html


## Vue DevTools 调试

自 Taro 3.x 改造为运行时框架后，有不少同学抱怨小程序开发者工具的 AppData 面板看到的都是 Taro 虚拟 DOM 的序列化结果，而不是页面的 data 数据。为了缓解这个问题，并进一步地提升开发者的开发体验，Taro 对 React DevTools 和 Vue DevTools 进行了适配。只需要简单地配置，就能够和开发 Web 应用时一样使用框架的 DevTools。
```shell
# 1. 安装
npm install @tarojs/plugin-vue-devtools -D
# 2.配置 Taro 插件  config/dev.js
config = {
  plugins: isOpenDevTools ? ['@tarojs/plugin-vue-devtools'] : [],,
  // ...
}
# 2.默认不开启 devtools 调试 新增 script 开启 package.json
"devtools:weapp": "npm run build:weapp -- --watch --devtools",
```
## request 封装

- 别名vscode alias 不识别问题

```shell
#  tsconfig.json  compilerOptions 中
"paths": {
    "@/*": [
      "src/*"
    ]
},
```

- 处理h5跨域问题，配置devServer 及 defineConstants HOST
```javascript
// config/dev.js
const args = process.argv;
const isOpenDevTools = args.includes('--devtools');

const isH5 = process.env.TARO_ENV === 'h5';
const HOST = '"https://blm-mrb.dev.bzlrobot-ift.com"';

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  // 新增
  defineConstants: {
    HOST: isH5 ? '""' : HOST,
  },
  mini: {},
  h5: {
    // 新增
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

// utils/request.js, 添加baseUrl

// @ts-ignore  在 config 中通过 defineConstants 配置的
const baseUrl = HOST;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

```

- 使用taro-axios
  
vue文件中不直接写api链接，统一放到api文件夹中调用


## 全局样式配置