// @unocss-include

import { Preset } from 'unocss';

export default function (): Preset {
  return {
    name: 'ka-unocss-preset',
    shortcuts: [
      {
        'wh-full': 'w-full h-full',
      },
      {
        'flex-center': 'flex justify-center items-center',
        'flex-x-center': 'flex justify-center',
        'flex-y-center': 'flex items-center',
        'flex-column': 'flex flex-col',
        'flex-column-center': 'flex-center flex-col',
      },
    ],
  };
}
