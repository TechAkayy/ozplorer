//vite.config.js (or) vite.config.ts

import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  plugins: [
    liveDesigner({
      tailwindcss: {
        configPath: 'tailwind.config.js',
        cssPath: '@/assets/css/tailwind.css'
      },
      devtoolsKey: 'devtools'
      //... 
    }),
    //...
    Unocss({
      presets: [
        presetIcons({
          prefix: '', // overrides default prefix 'i'
        })
      ]
    }),
  ],
  //...
})