<!--
 * @Author: MarioGo
 * @Date: 2021-12-09 14:44:34
 * @LastEditTime: 2021-12-10 16:39:31
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/views/login/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <transition name="slide-fade">
    <div
      class="login child-view relative flex justify-center items-center max-w-full h-full"
    >
      <n-card
        class="w-380px flex bg-white rounded-20px shadow-xl hover:shadow-2xl"
      >
        <!-- 头部组件 -->
        <div class="card p-8px">
          <div class="card-top flex justify-center items-center">
            <img
              class="w-40px mr-10px"
              src="@/assets/images/foxhis-logo.png"
              alt="logo"
            />
            <span class="text-2xl">Foxhis-Admin Pro</span>
          </div>
          <p class="flex justify-center mt-10px text-gray-500">
            Naive Ui Admin中台前端/设计解决方案
          </p>
        </div>
        <!-- 内容区域 -->
        <main>
          <h3 class="text-16px text-primary font-medium pb-10px">
            {{ activeModule.label }}
          </h3>
          <component :is="activeModule.component" />
        </main>
      </n-card>
      <!-- svg 背景图片 -->
      <LoginBgTop />
      <LoginBgBottom />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs, computed, watch } from 'vue'
import type { Component } from 'vue'
import { NCard, NForm, NFormItem, NRow, NCol, NButton, NInput } from 'naive-ui'
import { useThemeStore } from '@/store'
import LoginBgTop from '@components/LoginSvgBg/loginBgTop.vue'
import LoginBgBottom from '@components/LoginSvgBg/LoginBgBottom.vue'
import { PwdLogin, CodeLogin, Register, ResetPwd } from './components'

import { useRouter, useRoute } from 'vue-router'
// todo:初始化写死 登录界面
interface LoginModule {
  key: string
  label: string
  component: Component
}

interface Props {
  /** 登录模块分类 */
  module: 'pwd-login' | 'code-login' | 'register' | 'reset-pwd' | 'bind-wechat'
}

const router = useRouter()
console.log(
  '%c 🍜 router: ',
  'font-size:20px;background-color: #EA7E5C;color:#fff;',
  router
)

const route = useRoute()
console.log(
  '%c 🥖 route: ',
  'font-size:20px;background-color: #33A5FF;color:#fff;',
  route
)

const props = defineProps(['id'])
console.log(
  '%c 🌽 props: ',
  'font-size:20px;background-color: #E41A6A;color:#fff;',
  props.id
)
const defaultActive = ref('pwd-login')
const modules = [
  { key: 'pwd-login', label: '酒店工号登录', component: PwdLogin },
  {
    key: 'code-login',
    label: '手机验证码登录',
    component: CodeLogin,
  },
  { key: 'register', label: '注册', component: Register },
  {
    key: 'reset-pwd',
    label: '忘记密码',
    component: ResetPwd,
  },
]
const useRouteCurrent = reactive(useRoute())
console.log(
  '%c 🥞 useRouteCurrent: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  useRouteCurrent.params.id
)

const activeModule = computed(() => {
  const active: LoginModule = { ...modules[0] }
  const findItem = modules.find((item) => item.key === props.id)
  if (findItem) {
    Object.assign(active, findItem)
  }
  return active
})

// // 监听多个数据时，参数为数组
// watch(
//   [() => useRouteCurrent.name, () => useRouteCurrent.params.id],
//   ([currRoute, currQuery], [fromRoute, oldQuery]) => {
//     console.log(currRoute, '--', fromRoute)
//     if (currQuery !== oldQuery) {
//       defaultActive.value = currQuery as string
//     }
//     console.log(currQuery, '********', oldQuery)
//   }
// )
</script>

<style>
/* 路由动画 */
/* .child-view {
  position: absolute;
  width: 100%;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
} */

/* 离开 */
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
/* 进入 */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
