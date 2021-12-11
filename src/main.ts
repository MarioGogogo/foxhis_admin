/*
 * @Author: MarioGo
 * @Date: 2021-12-08 11:37:34
 * @LastEditTime: 2021-12-10 09:33:19
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { create, NButton, NCard, NGradientText } from 'naive-ui'
import { createPinia } from 'pinia'
/** 引入静态资源 */
import 'virtual:windi.css'
import '@assets/style/global.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
