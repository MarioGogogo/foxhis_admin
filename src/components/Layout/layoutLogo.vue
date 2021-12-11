<template>
  <div class="flex justify-center items-center p-10px">
    <img
      class="w-30px mr-10px"
      src="@/assets/images/foxhis-logo.png"
      alt="logo"
      :class="{ 'mr-2': !collapsed }"
    />
    <span v-show="!collapsed">Foxhis-Admin</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  collapsed: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<style lang="scss" scoped></style>
