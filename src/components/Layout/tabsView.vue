<template>
  <div class="layout-tabs flex items-center justify-between overflow-hidden">
    <n-icon
      size="20"
      v-if="false"
      class="tabs-scroll-prev mx-12px hover:cursor-pointer"
    >
      <ChevronBackCircleOutlineIcon />
    </n-icon>
    <div class="tabs-scroll-middle flex flex-auto overflow-x-scroll">
      <div
        v-for="panel in panelsRef"
        class="flex items-center flex-nowrap ml-6px w-100px bg-white rounded-4px mt-10px shadow-md :hover:cursor-pointer"
        @contextmenu="handleContextMenu"
      >
        <p
          class="text-black flex-auto whitespace-nowrap text-base-14px flex-nowrap px-16px py-10px"
          :class="{ active: panel.label === nameRef }"
        >
          {{ panel.name }}
        </p>
        <n-icon
          v-if="panel.label != 'console'"
          size="20"
          class="justify-end"
          @click="handleClose"
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
    <n-icon
      size="20"
      v-if="false"
      class="tabs-scroll-next mx-12px hover:cursor-pointer"
    >
      <ChevronForwardCircleOutlineIcon />
    </n-icon>
  </div>

  <!-- <n-tabs
    v-model:value="nameRef"
    type="card"
    closable
    @close="handleClose"
    @update:value="handleTabClick"
    tab-style="min-width: 80px; background-color:#fff;border:none"
  >
    <n-tab-pane
      v-for="panel in panelsRef"
      :key="panel"
      :tab="panel.name"
      :name="panel.label"
    >
    </n-tab-pane>
  </n-tabs> -->
</template>

<script lang="ts" setup>
import { NTabs, NIcon, NTabPane, NDropdown, NScrollbar } from 'naive-ui'
import { defineProps, ref, watch, computed, nextTick, h } from 'vue'
import { useTabsStore } from '@/store'
import { useRoute } from 'vue-router'
import {
  Cog as CogIcon,
  WineOutline as WineIcon,
  List as ListIcon,
  Bug as BugIon,
  CloseOutline as CloseOutlineIcon,
  ChevronBackCircleOutline as ChevronBackCircleOutlineIcon,
  ChevronForwardCircleOutline as ChevronForwardCircleOutlineIcon,
} from '@vicons/ionicons5'

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
const handleSelect = (value) => {
  console.log(
    '%c 🥦 value: ',
    'font-size:20px;background-color: #EA7E5C;color:#fff;',
    value
  )
}

const handleContextMenu = (e) => {
  e.preventDefault()
  showDropdownRef.value = false
  nextTick().then(() => {
    showDropdownRef.value = true
    xRef.value = e.clientX
    yRef.value = e.clientY
  })
}
const onClickoutside = (e) => {
  showDropdownRef.value = false
}
watch(
  [() => currentRoute.name, () => currentRoute.params],
  ([currRoute, currQuery], [fromRoute, oldQuery]) => {
    console.log(currRoute, '--', fromRoute)
    console.log(currQuery, '********', oldQuery)
    //判断点击是tabs 有的标签则直接跳转刷新
    nameRef.value = currRoute as string
    //不存在 tabs 中 则增加 tabs 并路由跳转
    let flag = false
    for (let item of tabsStore.openTab) {
      if (item.label === currRoute) {
        tabsStore.setActiveIndex(currentRoute.path)
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
      tabsStore.setActiveIndex(currentRoute.path as string)
    }

    console.log(
      '%c 🍞 tabsStore.openTab: ',
      'font-size:20px;background-color: #F5CE50;color:#fff;',
      tabsStore.openTab
    )
  }
)
// 点击 tabs
const handleTabClick = (value) => {
  console.log(
    '%c 🍔 handleTabClick: ',
    'font-size:20px;background-color: #ED9EC7;color:#fff;',
    value
  )
}
// 关闭 tabs
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
</script>

<style lang="scss" scoped>
.layout-tabs {
  background-color: #f5f7f9;
  padding: 0px 19px 0px 10px;
}
.tabs-scroll-middle p.active {
  color: #18a058;
}
:deep(.n-tabs .n-tabs-nav.n-tabs-nav--card-type .n-tabs-pad) {
  border-bottom: none;
}
</style>
