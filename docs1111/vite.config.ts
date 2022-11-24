/**
 * 默认 Vitepress 是无需配置 vitepress.config.ts 的，但是组件库中需要支持 JSX 语法与 UnoCSS，所以就需要添加配置文件
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});