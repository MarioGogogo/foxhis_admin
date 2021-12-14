<!--
 * @Author: MarioGo
 * @Date: 2021-12-14 09:28:35
 * @LastEditTime: 2021-12-14 18:08:38
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis_admin/src/components/Layout/sliderMenu.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :options="menuOptions"
    :indent="24"
    :expanded-keys="state.openKeys"
    :value="getSelectedKeys"
    @update:value="clickMenuItem"
    @update:expanded-keys="menuExpanded"
    accordion
  />
</template>

<script lang="ts" setup>
import { c, NMenu } from 'naive-ui'
import { computed, ref, reactive, watch, unref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabsStore } from '@/store'
import { menuOptions } from '@/mockData/menuOptions'
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
interface MenuOption {
  name: string
  id: Number
}
const menus = ref<any[]>([])
const tabsStore = useTabsStore()
// 当前路由
const currentRoute = useRoute()
const router = useRouter()
//当前激活的标签
const selectedKeys = ref<string>(currentRoute.name as string)
// 获取当前打开的子菜单
const matched = currentRoute.matched
const getOpenKeys =
  matched && matched.length ? matched.map((item) => item.name) : []

const state = reactive({
  openKeys: [],
})

// 跟随页面路由变化，切换菜单选中状态
watch(
  () => currentRoute.fullPath,
  () => {
    const matched = currentRoute.matched
    const arr = matched[1].path.split('/')
    state.openKeys = [arr[1], arr[2]]
    console.log(
      '%c 🥥 state.openKeys: ',
      'font-size:20px;background-color: #6EC1C2;color:#fff;',
      state.openKeys
    )
    const activeMenu: string = (currentRoute.meta?.activeMenu as string) || ''
    selectedKeys.value = activeMenu
      ? (activeMenu as string)
      : (currentRoute.name as string)
  }
)
// watch(
//   () => currentRoute.fullPath,
//   () => {
//     // updateMenu()
//     const matched = currentRoute.matched
//     if (matched.length > 0) {
//       const last = matched.pop()
//       const arr = last.path.split('/')
//       state.openKeys = arr.length > 2 ? [arr[1], arr[2]] : [arr[1]]
//       console.log(
//         '%c 🍠 当前需展开的数组: ',
//         'font-size:20px;background-color: #E41A6A;color:#fff;',
//         state.openKeys
//       )
//     }
//     const activeMenu: string = (currentRoute.meta?.activeMenu as string) || ''
//     //当前激活的标签
//     selectedKeys.value = activeMenu
//       ? (activeMenu as string)
//       : (currentRoute.name as string)
//     return
//   }
// )
const getSelectedKeys = computed(() => unref(selectedKeys))

// function updateMenu() {
//   if (!settingStore.menuSetting.mixMenu) {
//     menus.value = generatorMenu(asyncRouteStore.getMenus)
//   } else {
//     //混合菜单
//     const firstRouteName: string =
//       (currentRoute.matched[0].name as string) || ''
//     menus.value = generatorMenuMix(
//       asyncRouteStore.getMenus,
//       firstRouteName,
//       props.location
//     )
//     const activeMenu: string = currentRoute?.matched[0].meta
//       ?.activeMenu as string
//     headerMenuSelectKey.value = (activeMenu ? activeMenu : firstRouteName) || ''
//   }
// }

//展开菜单
function menuExpanded(openKeys: string[]) {
  console.log(
    '%c 🍟 openKeys: ',
    'font-size:20px;background-color: #7F2B82;color:#fff;',
    openKeys,
    state.openKeys
  )
  if (!openKeys) return
  const latestOpenKey = openKeys.find(
    (key) => state.openKeys.indexOf(key) === -1
  )
  const isExistChildren = findChildrenLen(latestOpenKey as string)
  state.openKeys = isExistChildren
    ? latestOpenKey
      ? [latestOpenKey]
      : []
    : openKeys
}
//查找是否存在子路由
function findChildrenLen(key: string) {
  if (!key) return false
  const subRouteChildren: string[] = []
  for (const { children, key } of unref(menus)) {
    if (children && children.length) {
      subRouteChildren.push(key as string)
    }
  }
  return subRouteChildren.includes(key)
}

// 点击菜单
const clickMenuItem = (key: string, item: any) => {
  console.log(
    '%c 🍫 key: ',
    'font-size:20px;background-color: #FFDD4D;color:#fff;',
    key,
    item
  )
  if (/http(s)?:/.test(key)) {
    window.open(key)
  } else {
    router.push({ name: key })
  }
}
</script>

<style lang="scss" scoped></style>
