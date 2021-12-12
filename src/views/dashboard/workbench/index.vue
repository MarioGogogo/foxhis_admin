<template>
  <div class="workplace px-6px">
    <n-card title="工作台">
      <n-grid cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
        <n-gi>
          <div class="flex items-center">
            <div>
              <n-avatar circle :size="64" :src="adminIcon" />
            </div>
            <div>
              <p class="px-4 text-xl">早安，Admin，开始您一天的工作吧！</p>
              <p class="px-4 text-gray-400 mt-10px">
                今日多云⛅️，15℃ - 25℃，祝您有个好心情! 🎉。
              </p>
            </div>
          </div>
        </n-gi>
        <n-gi>
          <div class="flex justify-between w-full">
            <div class="flex flex-1 flex-col justify-center text-center">
              <span class="text-secondary text-base-16px py-6px">项目数</span>
              <span class="text-2xl">16</span>
            </div>
            <div class="flex flex-1 flex-col justify-center text-center">
              <span class="text-secondary text-base-16px py-6px">待办</span>
              <span class="text-2xl">3/15</span>
            </div>
            <div class="flex flex-1 flex-col justify-center text-center">
              <span class="text-secondary text-base-16px py-6px">消息</span>
              <span class="text-2xl">35</span>
            </div>
          </div>
        </n-gi>
      </n-grid>
    </n-card>
    <!-- 项目 -->
    <n-grid
      class="mt-4"
      cols="2 s:1 m:1"
      responsive="screen"
      :x-gap="12"
      :y-gap="9"
    >
      <n-gi>
        <n-card
          :segmented="{ content: 'hard' }"
          title="项目"
          size="small"
          content-style="padding: 0;"
          :bordered="false"
        >
          <!-- 六宫格 -->
          <div class="flex flex-wrap project-card">
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <GithubOutlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Github</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                是一个面向开源及私有软件项目的托管平台。
              </div>
              <div class="flex mt-2 h-10 text-gray-400">开源君，2021-07-04</div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#42b983">
                    <LogoVue />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Vue</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                渐进式 JavaScript 框架
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                不懂vue的尤，2021-07-04
              </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e44c27">
                    <Html5Outlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Html5</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                HTML5是互联网的下一代标准。
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                撸码也是一种艺术 2021-04-01
              </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#dd0031">
                    <LogoAngular />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Angular</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                现代 Web 开发平台，百万粉丝热捧。
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                铁粉君 2021-07-04。
              </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#61dafb">
                    <LogoReact />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">React</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                用于构建用户界面的 JavaScript 库。
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                技术牛 2021-07-04。
              </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e3cd40">
                    <LogoJavascript />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Js</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                路是走出来的，而不是空想出来的。
              </div>
              <div class="flex mt-2 h-10 text-gray-400">架构组 2021-07-04</div>
            </n-card>
          </div>
        </n-card>
        <!-- 动态 -->
        <n-card
          :segmented="{ content: 'hard' }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="动态"
          class="mt-4"
        >
          <template #header-extra><a href="javascript:;">更多</a></template>
          <n-list>
            <n-list-item v-for="(item, index) in 5" :key="index">
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung 在 开源组 创建了项目 naive-ui-admin？">
                <template #description
                  ><p class="text-xs text-gray-500">
                    2021-07-04 09:37:16
                  </p></template
                >
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: 'hard' }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="快捷操作"
        >
          <div class="flex flex-wrap project-card">
            <n-card
              v-for="(item, index) in 5"
              :key="index"
              size="small"
              class="cursor-pointer project-card-item"
              hoverable
            >
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">主控台</span>
              </div>
            </n-card>
          </div>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import {
  NCard,
  NAvatar,
  NGrid,
  NGi,
  NIcon,
  NList,
  NListItem,
  NThing,
} from 'naive-ui'
import { reactive, toRefs } from 'vue'
import {
  GithubOutlined,
  DashboardOutlined,
  ProfileOutlined,
  FileProtectOutlined,
  SettingOutlined,
  ApartmentOutlined,
  Html5Outlined,
} from '@vicons/antd'
import {
  LogoVue,
  LogoAngular,
  LogoReact,
  LogoJavascript,
} from '@vicons/ionicons5'
import adminIcon from '@/assets/logo.png'
const data = reactive({})
const refData = toRefs(data)
</script>

<style lang="scss" scoped>
.project-card {
  margin-right: -6px;
  &-item {
    margin: -1px;
    width: 33.333333%;
  }
}
</style>
