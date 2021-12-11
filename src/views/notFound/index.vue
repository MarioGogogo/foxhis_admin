<!--
 * @Author: MarioGo
 * @Date: 2021-12-10 16:07:18
 * @LastEditTime: 2021-12-10 16:11:41
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/views/notFound/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="flex-center flex-col wh-full">
    <exception-svg type="404" :color="theme.themeColor" />
    <router-link to="/">
      <n-button type="primary">回到首页</n-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import ExceptionSvg from '@/components/ExceptionSvg/SvgNotFound.vue'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>
<style scoped></style>
