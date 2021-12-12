<template>
  <div class="flex-center flex-col wh-full">
    <SvgNoPermission type="404" :color="theme.themeColor" />
    <router-link to="/">
      <n-button type="primary">回到首页</n-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import SvgNoPermission from '@/components/ExceptionSvg/SvgNoPermission.vue'
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>
<style scoped></style>
