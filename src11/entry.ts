/**
 * vue组件插件
 * 1. 为了将所有组件都注册到vue实例当中
 * 2. 因为是vue插件所以必须有install方法
 */
import { App } from "vue";
import MyButton from "./button";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
  },

};