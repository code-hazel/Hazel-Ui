declare module "*.vue" {
  /**
   * 定义模块的类型定义
   */
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }