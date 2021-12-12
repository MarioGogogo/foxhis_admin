<template>
  <div class="layout-header flex justify-between items-center p-14px shadow-md">
    <div class="layout-header-left flex justify-between items-center">
      <n-icon size="20" class="hover:cursor-pointer" @click="handleCollapsed">
        <OptionsSharpIcon />
      </n-icon>
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <RefreshIcon />
      </n-icon>
      <n-breadcrumb class="mx-12px hover:cursor-pointer">
        <n-breadcrumb-item>
          <n-dropdown :options="options1">Dashboard</n-dropdown>
        </n-breadcrumb-item>
        <n-breadcrumb-item>{{ $route.meta.title }} </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="layout-header-right flex justify-between items-center">
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <SearchOutlineIcon />
      </n-icon>
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <LogoOctocatIcon />
      </n-icon>
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <LockOpenOutlineIcon />
      </n-icon>
      <n-icon size="20" class="mx-12px hover:cursor-pointer" @click="toggle">
        <ExpandIcon />
      </n-icon>
      <n-badge value="99+" class="mx-12px hover:cursor-pointer">
        <n-icon size="20">
          <NotificationsOutlineIcon />
        </n-icon>
      </n-badge>
      <n-avatar
        class="mx-12px hover:cursor-pointer"
        round
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <SettingsOutlineIcon />
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  NIcon,
  NBreadcrumb,
  NBreadcrumbItem,
  NBadge,
  NAvatar,
  NDropdown,
} from 'naive-ui'
import { ref, defineEmits, computed } from 'vue'
import {
  GameControllerOutline,
  Expand as ExpandIcon,
  SearchOutline as SearchOutlineIcon,
  Refresh as RefreshIcon,
  OptionsSharp as OptionsSharpIcon,
  LockOpenOutline as LockOpenOutlineIcon,
  LogoOctocat as LogoOctocatIcon,
  SettingsOutline as SettingsOutlineIcon,
  NotificationsOutline as NotificationsOutlineIcon,
} from '@vicons/ionicons5'
import { useTabsStore } from '@/store'
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const tabsStore = useTabsStore
const breadcrumb_parent = computed(() => tabsStore.breadcrumb_parent)
const breadcrumb_child = computed(() => tabsStore.breadcrumb_child)

// 头部面包屑数据
const options1 = [
  {
    label: 'David Tao',
    key: 1,
  },
  {
    label: '黑色柳丁',
    key: 2,
  },
]
const emit = defineEmits(['update'])
// 折叠方式
const handleCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}
</script>

<style lang="scss" scoped></style>
