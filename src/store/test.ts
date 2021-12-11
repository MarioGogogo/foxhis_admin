/*
 * @Author: MarioGo
 * @Date: 2021-12-08 14:07:34
 * @LastEditTime: 2021-12-09 15:11:01
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/store/test.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { defineStore } from 'pinia'

const delay = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('token')
      resolve()
    }, 2000)
  })
}

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员',
    delay: '0',
  }),
  // Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await post(data);
      await delay()
      this.delay = data
    },
  },
})
