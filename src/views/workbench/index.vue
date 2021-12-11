<template>
  <div class="container">
    <h2>工作台</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})
    const refData = toRefs(data)
    return {
      ...refData,
    }
  },
})
</script>

<style lang="scss" scoped></style>
