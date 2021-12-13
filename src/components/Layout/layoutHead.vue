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
    <!-- 右侧 -->
    <div class="layout-header-right flex justify-between items-center">
      <!-- 搜索 -->
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <n-icon size="20" class="mx-12px hover:cursor-pointer">
            <SearchOutlineIcon />
          </n-icon>
        </template>
        <span>搜索</span>
      </n-tooltip>
      <!-- 消息 -->
      <n-popover trigger="click" placement="bottom" :style="{ width: '320px' }">
        <template #trigger>
          <n-badge value="99+" class="mx-12px hover:cursor-pointer">
            <n-icon size="20">
              <NotificationsOutlineIcon />
            </n-icon>
          </n-badge>
        </template>
        <div class="msg-dialog">
          <div class="head flex justify-between">
            <span>通知</span>
            <div class="read">
              <n-switch v-model:value="isReacMsg" />
              全部已读
            </div>
          </div>
          <n-divider />
          <n-list>
            <div
              class="list-item pb-10px"
              v-for="(item, index) in 3"
              :key="index"
            >
              <div
                class="list-item-head flex pb-10px justify-start items-center"
              >
                <p class="text-base-13px text-gray-600 mr-10px">
                  关于版本发布的通知
                </p>
                <n-tag type="success" size="small" round>最新</n-tag>
              </div>

              <div
                class="list-item-content text-base-12px text-gray-400 leading-5"
              >
                Ah Jung 在 开源组 创建了项目
                naive-ui-admin?正式发布时间:2021年02月28日
              </div>
              <span class="text-base-12px">2020-12-08</span>
            </div>
          </n-list>
          <n-divider />
          <p class="text-center py-5px cursor-pointer">前往通知中心</p>
        </div>
      </n-popover>
      <!-- github -->
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <n-icon size="20" class="mx-12px hover:cursor-pointer">
            <LogoOctocatIcon />
          </n-icon>
        </template>
        <span>github</span>
      </n-tooltip>
      <!-- 锁屏 -->
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <n-icon size="20" class="mx-12px hover:cursor-pointer">
            <LockOpenOutlineIcon />
          </n-icon>
        </template>
        <span>锁屏</span>
      </n-tooltip>
      <!-- 全屏 -->
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <n-icon
            size="20"
            class="mx-12px hover:cursor-pointer"
            @click="toggle"
          >
            <ExpandIcon />
          </n-icon>
        </template>
        <span>全屏</span>
      </n-tooltip>

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
  NDivider,
  NIcon,
  NBreadcrumb,
  NBreadcrumbItem,
  NBadge,
  NAvatar,
  NDropdown,
  NTooltip,
  NPopover,
  NSwitch,
  NList,
  NTag,
  NListItem,
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

const isReacMsg = ref(false)
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

<style lang="scss" scoped>
:deep(.n-divider:not(.n-divider--vertical)) {
  margin-top: 6px;
  margin-bottom: 0px;
}
</style>
