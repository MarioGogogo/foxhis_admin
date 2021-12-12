<template>
  <n-space :vertical="true" :size="16" class="px-10px pb-10px">
    <top-chart />
    <data-card />
    <BottomPart />
  </n-space>
</template>
<script lang="ts" setup>
import { NSpace } from 'naive-ui'
import TopChart from './TopChart.vue'
import DataCard from './DataCard.vue'
import BottomPart from './BottomPart.vue'
</script>
