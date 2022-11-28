
# 初始化流程
## 初始化vite
pnpm init
pnpm i vite@"3.0.7" -D
## 初始化vue
pnpm i vue@"3.2.37"
1. vue默认的包是不支持模版编译功能的，template语法
2. 编译功能是在构建阶段完成
3. vite可以编译vue模版，安装下面的插件
## vite不能解析vue
pnpm i @vitejs/plugin-vue@"3.0.3" -D
## vite 支持jsx组件
pnpm i @vitejs/plugin-vue-jsx@"2.0.0" -D

# css样式系统
## Vite 插件的形式引入 UnoCSS。
pnpm i -D unocss@"0.45.6"
pnpm i -D @iconify-json/ic@"1.1.4"








# vitepress - 搭建文档网站
 pnpm add vitepress -D
1. 默认 Vitepress 是无需配置 vitepress.config.ts 的，但是组件库中需要支持 JSX 语法与 UnoCSS，所以就需要添加配置文件
2. echo '# SmartyUI' > docs/index.md 这句代码可以创建文件哦
## 如何编写文档
docs/.vitepress/config.ts 配置Nav和Sidebar
引入例子组建 如 import basic from './basic.vue'
:::demo [路径]上编写组件路径如:::demo button/basic
:::demo [实例] ::: 包裹实例 如：<basic></basic>




# 单元测试
npm i jest -g
根据 jest 约定：
## Vitest 是一个基于 Vite 的测试框架
pnpm i -D vitest@"0.21.1" happy-dom@"6.0.4" @vue/test-utils@"2.0.2"

功能函数对应的测试函数放在当前目录的tests目录中；
测试的函数的文件名会是 fun.spec.js。 比如 add.js =》 add.spec.js。
# 注意点
## 添加模块类型定义
### 引用 .vue 模块时候，编辑器中 import 语句会有红色的警告
shims-vue.d.ts文件
因为ts默认不支持vue类型模块，需添加类型定义

## 打包成兼容多种js模块标砖的软件包
配置vite.config.ts 
使用到了压缩需安装一下
pnpm i terser@"5.4.0" -D