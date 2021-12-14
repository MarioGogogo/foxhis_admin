<!--
 * @Author: MarioGo
 * @Date: 2021-12-10 16:55:12
 * @LastEditTime: 2021-12-14 17:45:43
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis_admin/src/views/home/index.vue
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
      <n-layout :inverted="inverted" class="flex-col flex-auto">
        <!-- 头部菜单 -->
        <LayoutHead :inverted="inverted" v-model:collapsed="collapsed" />
        <!-- 底部tab内容 -->
        <div class="layout-tabs">
          <TabsView />
        </div>
        <div class="wrapper flex-auto" style="background-color: #f5f7f9">
          <transition :name="transitionName">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  h,
  ref,
  onMounted,
  watch,
  computed,
  Transition,
} from 'vue'
import { NSpace, NLayout, NLayoutSider } from 'naive-ui'
import { useRoute, useRouter, RouterView } from 'vue-router'
import {
  LayoutLogo,
  SliderMenu,
  TabsView,
  LayoutHead,
} from '@/components/Layout'
import { useTabsStore } from '@/store'

const transitionName = ref('fold-left')
//是否折叠// 菜单是否折叠 模式 false 不折叠
const collapsed = ref<boolean>(false)
//切换暗黑模式
const inverted = ref(false)

// 当前路由
const currentRoute = useRoute()

const tabsStore = useTabsStore()

onMounted(() => {
  //查看缓存 initDataTabs
  cacheInitTabs()
})

const cacheInitTabs = () => {
  let tabs = localStorage.getItem('TABS-ROUTER')
  if (tabs == null) {
    if (currentRoute.path === '/dashboard/console') {
      tabsStore.addTabs({
        route: currentRoute.path,
        name: currentRoute.meta.title,
        label: 'console',
      })
      tabsStore.setActiveIndex(currentRoute.path as string)
    }
  } else {
    const { value } = JSON.parse(tabs)
    Array.from(value).forEach((item) => {
      tabsStore.addTabs({
        route: item.route,
        name: item.name,
        label: item.label,
      })
    })
  }
}
</script>

<style lang="scss" scoped>
// todo:表格过度动画
.fold-left-leave-active,
.fold-left-enter-active {
  transition: all 0.5s;
}
.fold-left-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fold-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
