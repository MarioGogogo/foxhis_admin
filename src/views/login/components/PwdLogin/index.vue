<!--
 * @Author: MarioGo
 * @Date: 2021-12-09 15:49:40
 * @LastEditTime: 2021-12-10 16:58:36
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/views/login/components/PwdLogin/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="login-page">
    <n-form :model="model" ref="formRef" :rules="rules">
      <n-form-item path="username" label="账号" :show-label="false">
        <n-input
          size="large"
          placeholder="请输入工号"
          v-model:value="model.username"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="password" label="密码" :show-label="false">
        <n-input
          size="large"
          placeholder="请输入密码"
          v-model:value="model.password"
          @input="handlePasswordInput"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="password" label="请选择酒店" :show-label="false">
        <n-select
          placeholder="选择酒店"
          size="large"
          v-model:value="value"
          :options="options"
        />
      </n-form-item>
      <n-space justify="space-between" size="large">
        <n-checkbox v-model:checked="rememberMe">记住我</n-checkbox>
        <span class="text-primary cursor-pointer">忘记密码？</span>
      </n-space>
      <n-button
        class="w-full mt-10px"
        size="large"
        @click="handleValidateButtonClick"
        :disabled="model.username === null"
        type="primary"
      >
        <n-spin
          v-show="show"
          :size="20"
          class="mr-10px"
          size="small"
          stroke="#fff"
        />
        登录
      </n-button>
      <div class="flex justify-between mt-12px">
        <n-button
          class="flex-1"
          size="large"
          @click="toCurrentLogin('code-login')"
        >
          手机验证码登录
        </n-button>
        <div class="w-12px"></div>
        <n-button
          class="flex-1"
          size="large"
          @click="toCurrentLogin('register')"
        >
          注册
        </n-button>
      </div>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NCheckbox,
  NButton,
  NSpace,
  NSelect,
  NSpin,
} from 'naive-ui'
import { useRouter } from 'vue-router'
import type { FormInst, FormRules } from 'naive-ui'

import OtherLogin from './OtherLogin.vue'
interface dataProps {}
const router = useRouter()
const show = ref(false)
const formRef = ref<(HTMLElement & FormInst) | null>(null)
const value = ref('')
const model = ref({
  username: 'jack',
  password: '123456',
  reenteredPassword: null,
})
const options = ref([
  {
    label: '西软集团酒店',
    value: 'song0',
    disabled: true,
  },
  {
    label: '西软一号店',
    value: 'song3',
    disabled: true,
  },
  {
    label: '西软二号店',
    value: 'song4',
  },
  {
    label: '西软三号店',
    value: 'song5',
  },
  {
    label: '西软四号店',
    value: 'song6',
  },
  {
    label: '西软五号店',
    value: 'song7',
    disabled: true,
  },
])
//登录
const handleValidateButtonClick = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
    router.push({
      name: `dashboard`,
      params: {},
      query: {},
    })
  }, 2000)
}
const validatePasswordStartWith = (rule, value) => {
  return (
    model.value.password &&
    model.value.password.startsWith(value) &&
    model.value.password.length >= value.length
  )
}
function validatePasswordSame(rule, value) {
  return value === model.value.password
}
const handlePasswordInput = () => {
  if (model.value.reenteredPassword) {
    rPasswordFormItemRef.value.validate({ trigger: 'password-input' })
  }
}

const toCurrentLogin = (type: string) => {
  router.push({
    path: `/login/${type}`,
    params: { type },
    query: {},
  })
}
const rules = {
  age: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('需要年龄')
        } else if (!/^\d*$/.test(value)) {
          return new Error('年龄应该为整数')
        } else if (Number(value) < 18) {
          return new Error('年龄应该超过十八岁')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur'],
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input',
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input'],
    },
  ],
}
const rememberMe = ref(false)
const data = reactive({})
const refData = toRefs(data)

const loading = () => {}

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return
  e.preventDefault()
  // formRef.value.validate((errors) => {
  //   if (!errors) {
  //     startLoading()
  //     setTimeout(() => {
  //       endLoading()
  //       setToken('temp-token')
  //       if (loginRedirectUrl.value) {
  //         routerPush(loginRedirectUrl.value)
  //       } else {
  //         toHome()
  //       }
  //       const { userName } = auth.userInfo
  //       notification.success({
  //         title: '登录成功！',
  //         content: `欢迎回来，${userName}!`,
  //         duration: 3000,
  //       })
  //     }, 1000)
  //   }
  // })
}
</script>

<style lang="scss" scoped></style>
