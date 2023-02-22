//vite.config.js (or) vite.config.ts

import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'

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
  ],
  //...
})