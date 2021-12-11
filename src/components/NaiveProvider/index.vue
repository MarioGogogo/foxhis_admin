<!--
 * @Author: MarioGo
 * @Date: 2021-12-09 15:39:40
 * @LastEditTime: 2021-12-09 15:42:50
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/components/NaiveProvider/index.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot></slot>
          <naive-provider-content />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import {
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
} from 'naive-ui'
import NaiveProviderContent from './components/NaiveProviderContent.vue'
</script>
<style scoped></style>
