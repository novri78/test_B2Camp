# B2Camp_VUE.JS
LEARN VUE FRAMEWORK

Create framework Project VUE in Repository:
- 
 [1] Check detail main.js & add/import Bootstrap

 [2] Create vite.config.js :
  // vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
})

 [3] Create Folder css,img & scss in assets also create folder component in scss folder
 
 [4] Check _style.scss & _global.scss 


     
