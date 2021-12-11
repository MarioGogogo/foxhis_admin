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
        <!-- 封装 logo -->
        <LayoutLogo :collapsed="collapsed" />
        <!-- 封装侧边栏 -->
        <SliderMenu :collapsed="collapsed" />
      </n-layout-sider>
      <!-- 内容区域 -->
      <n-layout :inverted="inverted">
        <!-- 头部菜单 -->
        <LayoutHead :inverted="inverted" v-model:collapsed="collapsed" />
        <!-- 底部tab内容 -->
        <div class="layout-tabs">
          <TabsView />
        </div>
        <div class="wrapper">
          <RouterView />
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { defineComponent, h, ref, onMounted, watch, computed } from 'vue'
import { NSpace, NLayout, NLayoutSider } from 'naive-ui'
import { useRoute, useRouter, RouterView } from 'vue-router'
import {
  LayoutLogo,
  SliderMenu,
  TabsView,
  LayoutHead,
} from '@/components/Layout'
import { useTabsStore } from '@/store'
//是否折叠// 菜单是否折叠 模式 false 不折叠
const collapsed = ref<boolean>(false)
//切换暗黑模式
const inverted = ref(false)

// 当前路由
const currentRoute = useRoute()
//当前点击的侧边栏标签 组件 vmodel 双向绑定
const getCurrentSliderItem = computed(() => {
  return {
    label: '主控台',
    key: ' console',
  }
})
const router = useRouter()
const tabsStore = useTabsStore()

onMounted(() => {
  //判断当前 tabs 是否有值
  console.log(
    '%c 🍲 currentRoute.path: ',
    'font-size:20px;background-color: #EA7E5C;color:#fff;',
    currentRoute.path
  )
  if (currentRoute.path === '/dashboard/console') {
    tabsStore.addTabs({
      route: currentRoute.path,
      name: currentRoute.meta.title,
      label: 'console',
    })
    tabsStore.setActiveIndex(currentRoute.path as string)
  }
})
</script>

<style lang="scss" scoped></style>
