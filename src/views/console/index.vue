<template>
  <n-space :vertical="true" :size="16" class="px-10px">
    <top-chart />
    <data-card />
  </n-space>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import TopChart from './TopChart.vue'
import DataCard from './DataCard.vue'
</script>
