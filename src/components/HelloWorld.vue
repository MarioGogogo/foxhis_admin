<!--
 * @Author: MarioGo
 * @Date: 2021-12-08 11:37:34
 * @LastEditTime: 2021-12-09 14:33:28
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/components/HelloWorld.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h4 class="test">color</h4>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <div>异步调用类似actions:{{ mainStore.delay }}</div>
  <div>鼠标位置:{{ x }}--{{ y }}</div>
  <n-button type="primary" @click="showMessage">naive-ui</n-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'toastify-js/src/toastify.css'
import Toastify from 'toastify-js'
import HelloWorld from '@/components/HelloWorld.vue'
import { useMainStore } from '@/store/index'
import { useMouse } from '@vueuse/core'
export default defineComponent({
  setup() {
    const mainStore = useMainStore()
    const { x, y } = useMouse()
    const showMessage = async (msg: string) => {
      // $patch 修改 store 中的数据
      mainStore.$patch({
        name: '名称被修改了,nameLength也随之改变了',
      })
      //异步actions
      await mainStore.insertPost('100')
      console.log(50000)
      Toastify({
        text: 'This is a toast',
        className: 'info',
        gravity: 'top',
        close: true,
        position: 'center',
        // style: {
        //   background: "linear-gradient(to right, #00b09b, #96c93d)",
        // },
      }).showToast()
    }
    console.log('包环境:', import.meta.env.VITE_APP_WEB_URL)
    return {
      mainStore,
      showMessage,
      x,
      y,
    }
  },
})
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .test {
    color: $test-color;
  }
}
</style>
