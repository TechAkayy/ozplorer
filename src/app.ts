import devtools from '@vue/devtools'
if (process.env.NODE_ENV === 'development') {
  // devtools.connect(/* host, port */)
  // (window as any) = devtools
  // @ts-ignore
  window.devtools = devtools
}

import { defineApp } from 'iles'

import 'uno.css'
import '~/assets/css/base.css'
import '~/assets/css/tailwind.css'

export default defineApp({})
