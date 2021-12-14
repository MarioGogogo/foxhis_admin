<template>
  <div class="layout-tabs flex items-center justify-between overflow-hidden">
    <!-- 侧边栏logo -->
    <div class="w-32px h-32px flex justify-center items-center bg-white">
      <n-icon
        size="20"
        v-if="true"
        class="tabs-scroll-prev hover:cursor-pointer"
      >
        <ChevronBackCircleOutlineIcon />
      </n-icon>
    </div>
    <!-- 侧边栏内容 -->
    <div class="tabs-scroll-middle overflow-x-scroll">
      <div
        v-for="(panel, index) in panelsRef"
        :key="index"
        class="tab-mid-item flex items-center flex-nowrap ml-6px bg-white rounded-3px shadow-md cursor-pointer"
        @contextmenu="handleContextMenu"
        :class="{ width: panel.label != 'console' ? 'w-90px' : 'w-100px' }"
      >
        <p
          class="text-black flex-auto whitespace-nowrap text-base-14px flex-nowrap px-16px py-10px"
          :class="{ active: panel.label === nameRef }"
          @click="handleTabClick(panel)"
        >
          {{ panel.name }}
        </p>
        <n-icon
          v-if="panel.label != 'console'"
          class="mr-8px"
          size="20"
          @click="handleRmoveTab(index)"
        >
          <CloseOutlineIcon />
        </n-icon>
      </div>
      <n-dropdown
        placement="bottom-start"
        @select="handleSelect"
        trigger="manual"
        :x="xRef"
        :y="yRef"
        :options="options"
        :show="showDropdownRef"
        :on-clickoutside="onClickoutside"
      />
    </div>
    <div class="w-32px h-32px flex justify-center items-center bg-white">
      <n-icon size="20" class="tabs-scroll-next mx-12px hover:cursor-pointer">
        <ChevronForwardCircleOutlineIcon />
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NTabs, NIcon, NTabPane, NDropdown, NScrollbar } from 'naive-ui'
import { ref, watch, computed, nextTick, h } from 'vue'
import { useTabsStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import {
  Cog as CogIcon,
  WineOutline as WineIcon,
  List as ListIcon,
  Bug as BugIon,
  CloseOutline as CloseOutlineIcon,
  ChevronBackCircleOutline as ChevronBackCircleOutlineIcon,
  ChevronForwardCircleOutline as ChevronForwardCircleOutlineIcon,
} from '@vicons/ionicons5'
import { findParentRouteName } from '@/utils/router/index'
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const showDropdownRef = ref(false)
const xRef = ref(0)
const yRef = ref(0)
const options = [
  {
    label: '刷新当前',
    key: 'currentRefsh',
    icon: renderIcon(CogIcon),
  },
  {
    label: '关闭当前',
    key: 'currentClose',
    icon: renderIcon(CogIcon),
  },
  {
    label: '关闭其他',
    key: 'otherClose',
    icon: renderIcon(CogIcon),
  },
  {
    label: '关闭全部',
    key: 'allClose',
    icon: renderIcon(CogIcon),
  },
]

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
// todo:激活方式用 英文 label 统一
const tabsStore = useTabsStore()
const nameRef = ref('console')
const panelsRef = computed(() => tabsStore.openTab)

// 当前路由
const currentRoute = useRoute()
const router = useRouter()

//右键点击
const handleSelect = (value) => {}
// 启动右键
const handleContextMenu = (e) => {
  e.preventDefault()
  showDropdownRef.value = false
  nextTick().then(() => {
    showDropdownRef.value = true
    xRef.value = e.clientX
    yRef.value = e.clientY
  })
}
// 点击外面元素关闭
const onClickoutside = (e) => {
  showDropdownRef.value = false
}

watch(
  [() => currentRoute.name, () => currentRoute.params],
  ([currRoute, currQuery], [fromRoute, oldQuery]) => {
    //记录 acitve 值和改变 slide 侧边栏展开的默认值
    console.log(currRoute, '--', fromRoute)
    // console.log(currQuery, '********', oldQuery)
    findParentRouteName(currentRoute.path)
    //判断点击是tabs 有的标签则直接跳转刷新
    nameRef.value = currRoute as string
    //不存在 tabs 中 则增加 tabs 并路由跳转
    let flag = false
    for (let item of tabsStore.openTab) {
      if (item.label === currRoute) {
        flag = true
        break
      }
    }
    if (!flag) {
      tabsStore.addTabs({
        route: currentRoute.path,
        name: currentRoute.meta.title,
        label: currRoute,
      })
    }
  }
)
// 点击 tabs
const handleTabClick = (type) => {
  router.push({ name: type.label })
}
// 关闭 tabs
const handleRmoveTab = (index: number) => {
  const { value: panels } = panelsRef
  const name = panels[index].label
  const route = panels[index].route
  //全局状态删除
  tabsStore.deleteTabs(index)
  //fix:删除之后没有及时跳转
  if (nameRef.value === name) {
    nameRef.value = panels[panels.length - 1].label
    tabsStore.setActiveIndex(panels[panels.length - 1].route as string)
    handleTabClick(panels[panels.length - 1])
  }
}
</script>

<style lang="scss" scoped>
.layout-tabs {
  background-color: #f5f7f9;
  padding: 6px 19px 6px 10px;
}
.tabs-scroll-middle {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;

  &::-webkit-scrollbar {
    height: 0 !important;
  }
}
.tabs-scroll-middle p.active {
  color: #18a058;
}

:deep(.n-tabs .n-tabs-nav.n-tabs-nav--card-type .n-tabs-pad) {
  border-bottom: none;
}
</style>
