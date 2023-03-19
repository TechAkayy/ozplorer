//vite.config.js (or) vite.config.ts

import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  plugins: [
    liveDesigner({
      devtoolsKey: 'devtools',
      tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '@/assets/css/tailwind.css',
        restartOnConfigUpdate: true,
        restartOnThemeUpdate: false,
      },
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: '', // overrides default prefix 'i'
        }),
      ],
    }),
  ],
  //...
})
