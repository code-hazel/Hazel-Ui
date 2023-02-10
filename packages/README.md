pnpm install @hazel-ui/components -w
pnpm install @hazel-ui/theme-chalk -w
pnpm install @hazel-ui/utils -w
pnpm install vue typescript @types/node -D -w
-w 表示安装到共公模块的 packages.json 中，也就是根目录下的 packages.json
因为packages里面就是公共模块互相需要进行调用，所以要打包进根目录的node_modules