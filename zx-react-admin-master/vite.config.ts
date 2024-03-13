import { defineConfig } from "vite";
import { plugins } from "./build";
import * as path from "path";
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", //ip地址
    port: 80, // 设置服务启动端口号
  },
});
