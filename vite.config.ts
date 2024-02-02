import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import setupPlugins from './build/vite-plugins';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;

  return {
    // 项目 base url
    base: viteEnv.VITE_BASE_URL,

    // import 别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // css 变量导入
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/theme/style-vars/index.scss" as *;`,
        },
      },
    },

    // vite 插件
    plugins: setupPlugins(viteEnv),
  };
});
