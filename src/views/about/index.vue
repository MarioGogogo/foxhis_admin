<template>
  <div class="about">
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="关于">
        {{ name }} 是一个基于 vue3，vite2，TypeScript
        的中后台解决方案，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你，持续更新中。
      </n-card>
    </div>
    <div class="about-info px-6px">
      <n-card
        :bordered="false"
        title="项目信息"
        class="mt-4"
        size="small"
        :segmented="{ content: 'hard' }"
      >
        <n-descriptions bordered label-placement="left" class="py-2">
          <n-descriptions-item label="版本">
            <n-tag type="info" class="mt-6px">1.0</n-tag>
          </n-descriptions-item>
          <n-descriptions-item label="作者">
            <div class="flex items-center py-2">foxhis</div>
          </n-descriptions-item>
          <n-descriptions-item label="文档地址">
            <div class="flex items-center">
              <a href="www.foxhis.com" class="py-2" target="_blank"
                >查看文档地址</a
              >
            </div>
          </n-descriptions-item>
          <n-descriptions-item label="最后编译时间">
            <n-tag type="info" class="mt-6px"> 2020年12月30日12:00 </n-tag>
          </n-descriptions-item>
          <n-descriptions-item label="Github">
            <div class="flex items-center">
              <a
                href="https://github.com/MarioGogogo/foxhis_admin.git"
                class="py-2"
                target="_blank"
                >查看Github地址</a
              >
            </div>
          </n-descriptions-item>
          <n-descriptions-item label="QQ交流群">
            <div class="flex items-center">
              <a
                href="https://github.com/MarioGogogo/foxhis_admin.git"
                class="py-2"
                target="_blank"
                >点击链接加入群聊【Naive Admin】</a
              >
            </div>
          </n-descriptions-item>
        </n-descriptions>
      </n-card>
    </div>
    <div class="about-devtools px-6px">
      <n-card
        :bordered="false"
        title="开发环境依赖"
        class="mt-4"
        size="small"
        :segmented="{ content: 'hard' }"
      >
        <n-descriptions bordered label-placement="left" class="py-2">
          <n-descriptions-item
            v-for="item in devSchema"
            :key="item.field"
            :label="item.field"
          >
            {{ item.label }}
          </n-descriptions-item>
        </n-descriptions>
      </n-card>
    </div>
    <div class="about-protools px-6px">
      <n-card
        :bordered="false"
        title="生产环境依赖"
        class="mt-4 proCard"
        size="small"
        :segmented="{ content: 'hard' }"
      >
        <n-descriptions bordered label-placement="left" class="py-2">
          <n-descriptions-item
            v-for="item in schema"
            :key="item.field"
            :label="item.field"
          >
            {{ item.label }}
          </n-descriptions-item>
        </n-descriptions>
      </n-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NCard, NDescriptions, NDescriptionsItem, NTag } from 'naive-ui'
import { onMounted, ref } from 'vue'
// 注意 package.json 文件无需 export，直接 import
import config from '../../../package.json'

export interface schemaItem {
  field: string
  label: string
}
// const { pkg, lastBuildTime } = __APP_INFO__
// const { dependencies, devDependencies, name, version } = pkg
const schema: schemaItem[] = ref([])
const devSchema: schemaItem[] = ref([])

onMounted(() => {
  const projectName = 'foxis-admin'

  // 获取版本号
  let version = config.version
  if (config.dependencies) {
    Object.keys(config.dependencies).forEach((key) => {
      schema.value.push({ field: key, label: config.dependencies[key] })
    })
  }
  if (config.devDependencies) {
    Object.keys(config.devDependencies).forEach((key) => {
      devSchema.value.push({ field: key, label: config.devDependencies[key] })
    })
  }
})
</script>

<style lang="less" scoped></style>
