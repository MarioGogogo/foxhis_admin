<!--
 * @Author: MarioGo
 * @Date: 2021-12-09 15:49:46
 * @LastEditTime: 2021-12-10 16:51:57
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/views/login/components/Register/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="codelogin-page">
    <n-form :model="model" ref="formRef" :rules="rules">
      <n-form-item path="username" label="手机号码" :show-label="false">
        <n-input
          size="large"
          placeholder="请输入手机号码"
          v-model:value="model.username"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="code" label="验证码" :show-label="false">
        <n-input
          size="large"
          placeholder="请输入验证码"
          v-model:value="model.password"
          @input="handlePasswordInput"
          type="password"
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
      <n-form-item path="rePassword" label="再次确认密码" :show-label="false">
        <n-input
          size="large"
          placeholder="请再次输入密码"
          v-model:value="model.password"
          @input="handlePasswordInput"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-space justify="space-between" align="center" size="large">
        <n-checkbox v-model:checked="rememberMe" size="large"
          >我已经仔细阅读并接受用户协议和隐私政策</n-checkbox
        >
      </n-space>
      <n-button
        class="w-full mt-10px"
        size="large"
        @click="handleValidateButtonClick"
        :disabled="model.username === null"
        type="primary"
      >
        <n-spin
          v-show="false"
          :size="20"
          class="mr-10px"
          size="small"
          stroke="#fff"
        />
        确定
      </n-button>
      <n-button
        class="w-full mt-10px"
        size="large"
        :disabled="model.username === null"
        @click="toCurrentLogin('')"
      >
        返回
      </n-button>
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
} from 'naive-ui'
import { useRouter } from 'vue-router'
import type { FormInst, FormRules } from 'naive-ui'
// import { useRouterPush, useRouteQuery } from '@/composables'
// import { useLoading } from '@/hooks'

interface dataProps {}

// const { routerPush, toHome, toCurrentLogin } = useRouterPush()
// const { loading, startLoading, endLoading } = useLoading()
const formRef = ref<(HTMLElement & FormInst) | null>(null)
const value = ref('')
const model = ref({
  username: '',
  password: '',
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
const handleValidateButtonClick = () => {}
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

const router = useRouter()
const toCurrentLogin = (type: string | null) => {
  if (type == null) {
    return router.go(-1)
  }
  router.push({ path: `/login/${type}`, params: { type }, query: {} })
}

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
