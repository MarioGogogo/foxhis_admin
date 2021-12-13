<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :options="menuOptions"
    :indent="24"
    v-model:value="activeKey"
    :default-expanded-keys="defaultExpandedKeys"
    @update:value="clickMenuItem"
    accordion
  />
</template>

<script lang="ts" setup>
import { c, NMenu } from 'naive-ui'
import { computed, ref } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'
import { useTabsStore } from '@/store'
import { menuOptions } from '@/mockData/menuOptions'
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const tabsStore = useTabsStore()
const router = useRouter()
const defaultExpandedKeys = computed(() => tabsStore.activeMenu.p)

const activeKey = computed(() => tabsStore.activeMenu.c)

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
