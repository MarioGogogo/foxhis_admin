<!--
 * @Author: MarioGo
 * @Date: 2021-12-10 16:55:12
 * @LastEditTime: 2021-12-10 17:46:12
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/views/dashboard/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <n-space vertical>
    <n-layout class="n-layout overflow-hidden z-10" has-sider>
      <!-- 侧边栏 -->
      <n-layout-sider
        class="h-screen shadow-md"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="200"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <!-- todo:封装 logo -->
        <div class="flex justify-center items-center p-10px">
          <img
            class="w-30px mr-10px"
            src="@/assets/images/foxhis-logo.png"
            alt="logo"
          />
          <span class="">Foxhis-Admin</span>
        </div>
        <!-- 封装 -->
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="20"
          :options="menuOptions"
          :indent="24"
          v-model:value="activeKey"
          @update:value="clickMenuItem"
        />
      </n-layout-sider>
      <!-- 侧边内容区域 -->
      <n-layout>
        <!-- 头部菜单 -->
        <div
          class="layout-header flex justify-between items-center p-14px shadow-md"
        >
          <div class="layout-header-left flex justify-between items-center">
            <n-icon size="20" class="hover:cursor-pointer">
              <OptionsSharpIcon />
            </n-icon>
            <n-icon size="20" class="mx-12px hover:cursor-pointer">
              <RefreshIcon />
            </n-icon>
            <n-breadcrumb class="mx-12px hover:cursor-pointer">
              <n-breadcrumb-item>
                <n-dropdown :options="options1">Dashboard</n-dropdown>
              </n-breadcrumb-item>
              <n-breadcrumb-item> 主控台 </n-breadcrumb-item>
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
            <n-icon size="20" class="mx-12px hover:cursor-pointer">
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
        <!-- 底部tab内容 -->
        <div class="layout-tabs">
          <n-tabs
            v-model:value="nameRef"
            type="card"
            closable
            @close="handleClose"
            tab-style="min-width: 80px;"
          >
            <n-tab-pane
              v-for="panel in panelsRef"
              :key="panel"
              :tab="panel.toString()"
              :name="panel"
            >
              {{ panel }}
            </n-tab-pane>
          </n-tabs>
        </div>
        <div class="wrapper">
          <RouterView />
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { defineComponent, h, ref } from 'vue'
import {
  NSwitch,
  NSpace,
  NMenu,
  NLayout,
  NLayoutSider,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NIcon,
  NAvatar,
  NBadge,
  NTabs,
  NTabPane,
} from 'naive-ui'
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
import { useRoute, useRouter, RouterView } from 'vue-router'
import { menuOptions } from '@/mockData/menuOptions'
const activeKey = ref(null)
const collapsed = ref(false)
// 当前路由
const currentRoute = useRoute()
const router = useRouter()
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

const nameRef = ref(1)
const panelsRef = ref([1, 2, 3, 4, 5, 6, 7])
const handleClose = (name: number) => {
  const { value: panels } = panelsRef
  if (panels.length === 1) {
    console.log(
      '%c 🥚 最后一个了: ',
      'font-size:20px;background-color: #42b983;color:#fff;'
    )
    return
  }
  console.log(
    '%c 🥚 最后一个了: ',
    'font-size:20px;background-color: #42b983;color:#fff;',
    name
  )
  const index = panels.findIndex((v) => name === v)
  panels.splice(index, 1)
  if (nameRef.value === name) {
    nameRef.value = panels[index]
  }
}

interface MenuOption {
  name: string
  id: Number
}
// 点击菜单
const clickMenuItem = (key: string, item: any) => {
  console.log(
    '%c 🍖 key: ',
    'font-size:20px;background-color: #FFDD4D;color:#fff;',
    key,
    item
  )
  router.push({ name: key })
}
</script>

<style lang="scss" scoped></style>
