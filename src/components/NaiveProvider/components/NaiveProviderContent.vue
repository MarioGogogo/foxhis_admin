<!--
 * @Author: MarioGo
 * @Date: 2021-12-09 15:40:49
 * @LastEditTime: 2021-12-09 15:41:54
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/components/NaiveProvider/components/NaiveProviderContent.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'

// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

registerNaiveTools()
</script>
<style scoped></style>
