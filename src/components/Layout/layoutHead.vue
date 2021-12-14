<template>
  <div class="layout-header flex justify-between items-center p-14px shadow-md">
    <div class="layout-header-left flex justify-between items-center">
      <n-icon size="20" class="hover:cursor-pointer" @click="handleCollapsed">
        <OptionsSharpIcon />
      </n-icon>
      <n-icon
        size="20"
        class="mx-12px hover:cursor-pointer"
        @click="handleReloadPage"
      >
        <RefreshIcon />
      </n-icon>
      <!-- 面包屑 -->
      <n-breadcrumb>
        <template v-for="routeItem in breadcrumbList" :key="routeItem.name">
          <n-breadcrumb-item>
            <n-dropdown
              v-if="routeItem.children.length"
              :options="routeItem.children"
            >
              <span class="link-text">
                {{ routeItem.meta.title }}
              </span>
            </n-dropdown>
            <span class="link-text" v-else>
              {{ routeItem.meta.title }}
            </span>
          </n-breadcrumb-item>
        </template>
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

      <!-- 个人中心 -->
      <div class="layout-header-trigger layout-header-trigger-min">
        <n-dropdown
          trigger="hover"
          @select="avatarSelect"
          :options="avatarOptions"
        >
          <div class="avatar">
            <n-avatar round>
              {{ username }}
              <template #icon>
                <UserOutlinedIcon />
              </template>
            </n-avatar>
          </div>
        </n-dropdown>
      </div>
      <n-icon size="20" class="mx-12px hover:cursor-pointer">
        <SettingsOutlineIcon />
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserOutlined as UserOutlinedIcon } from '@vicons/antd'
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
import { ref, defineEmits, computed, unref } from 'vue'
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
import { useRoute, useRouter } from 'vue-router'
const { isFullscreen, toggle } = useFullscreen()
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const router = useRouter()
const route = useRoute()
console.log(
  '%c 🍢 route: ',
  'font-size:20px;background-color: #FFDD4D;color:#fff;',
  route
)
const username = ref('Admin')
const tabsStore = useTabsStore

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
// 头像设置
const avatarOptions = [
  {
    label: '个人设置',
    key: 1,
  },
  {
    label: '退出登录',
    key: 2,
  },
]
//头像下拉菜单
const avatarSelect = (key) => {
  switch (key) {
    case 1:
      router.push({ name: 'Setting' })
      break
    case 2:
      // doLogout()
      break
  }
}
const generator: any = (routerMap) => {
  return routerMap.map((item) => {
    const currentMenu = {
      ...item,
      label: item.meta.title,
      key: item.name,
      disabled: item.path === '/',
    }
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentMenu.children = generator(item.children, currentMenu)
    }
    return currentMenu
  })
}
const breadcrumbList = computed(() => {
  return generator(route.matched)
})
console.log(
  '%c 🥐 breadcrumbList: ',
  'font-size:20px;background-color: #465975;color:#fff;',
  breadcrumbList
)

const emit = defineEmits(['update'])
// 折叠方式
const handleCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}

// 刷新页面
const handleReloadPage = () => {
  router.go(0)
}
</script>

<style lang="scss" scoped>
:deep(.n-divider:not(.n-divider--vertical)) {
  margin-top: 6px;
  margin-bottom: 0px;
}
</style>
