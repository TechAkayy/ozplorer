import devtools from '@vue/devtools'

if (process.env.NODE_ENV /* nuxtApp.isDev */ === 'development') {
  (window as any).devtools = devtools
}

import { defineApp } from 'iles'

import '~/assets/base.css';
import '~/assets/css/tailwind.css'

export default defineApp({})
