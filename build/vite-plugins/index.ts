import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import process from 'vite-plugin-progress';
import unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * 构建 vite 插件参数
 * @param viteEnv 自定义环境变量
 * @returns
 */
export default function (viteEnv: ImportMetaEnv): PluginOption[] {
  return [
    vue(),
    vueJsx(),
    unocss(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    process(),
  ];
}
