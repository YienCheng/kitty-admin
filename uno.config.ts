import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetTypography,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

import presetKA from './build/uno-preset';
import path from 'node:path';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

const localIconPath = path.join(process.cwd(), 'src/assets/svg-icons');

export default defineConfig({
  presets: [
    // 基础样式
    presetUno(),
    // 属性化样式
    presetAttributify(),
    // 排版预设
    presetTypography(),
    // 图标预设
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        local: FileSystemIconLoader(localIconPath),
      },
      warn: true,
    }),
    // 自定义 预设
    presetKA(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
  }
});
