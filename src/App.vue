<!--
 * @Author: MarioGo
 * @Date: 2021-12-08 11:37:34
 * @LastEditTime: 2021-12-10 15:16:32
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/App.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div>
    <n-config-provider class="h-full" :locale="zhCN" :date-locale="dateZhCN">
      <n-element class="h-full">
        <!-- 弹窗 loading 组件 -->
        <naive-provider>
          <RouterView />
        </naive-provider>
      </n-element>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { NConfigProvider, NElement, zhCN, dateZhCN } from 'naive-ui'
import { defineComponent, reactive, toRefs } from 'vue'
import { RouterView } from 'vue-router'
interface dataProps {}
const data = reactive({})
const refData = toRefs(data)
</script>
