<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :options="menuOptions"
    :indent="24"
    v-model:value="activeKey"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts" setup>
import { NMenu } from 'naive-ui'
import { defineProps, ref, defineEmits } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'

import { menuOptions } from '@/mockData/menuOptions'
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const router = useRouter()
const activeKey = ref(null)

interface MenuOption {
  name: string
  id: Number
}
// 点击菜单
const clickMenuItem = (key: string, item: any) => {
  router.push({ name: key })
}
</script>

<style lang="scss" scoped></style>
