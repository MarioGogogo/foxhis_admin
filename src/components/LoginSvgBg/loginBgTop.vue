<template>
  <div class="login-bg-top">
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e366"></stop>
          <stop offset="95%" stop-color="#32ded466"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,125 0,125 C 95.66666666666669,126.42564102564103 191.33333333333337,127.85128205128204 258,117 C 324.66666666666663,106.14871794871796 362.33333333333326,83.02051282051283 437,84 C 511.66666666666674,84.97948717948717 623.3333333333335,110.06666666666666 725,115 C 826.6666666666665,119.93333333333334 918.3333333333333,104.7128205128205 988,115 C 1057.6666666666667,125.2871794871795 1105.3333333333335,161.08205128205128 1177,167 C 1248.6666666666665,172.91794871794872 1344.3333333333333,148.95897435897436 1440,125 C 1440,125 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e388"></stop>
          <stop offset="95%" stop-color="#32ded488"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,250 0,250 C 89.7205128205128,278.374358974359 179.4410256410256,306.74871794871797 249,295 C 318.5589743589744,283.25128205128203 367.9564102564103,231.37948717948714 442,221 C 516.0435897435897,210.62051282051286 614.7333333333332,241.7333333333333 708,251 C 801.2666666666668,260.2666666666667 889.1102564102564,247.6871794871795 978,249 C 1066.8897435897436,250.3128205128205 1156.825641025641,265.5179487179487 1234,268 C 1311.174358974359,270.4820512820513 1375.5871794871796,260.24102564102566 1440,250 C 1440,250 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e3ff"></stop>
          <stop offset="95%" stop-color="#32ded4ff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,375 0,375 C 75.80512820512823,367.0923076923077 151.61025641025645,359.18461538461537 239,364 C 326.38974358974355,368.81538461538463 425.3641025641025,386.3538461538462 500,396 C 574.6358974358975,405.6461538461538 624.9333333333333,407.4 702,411 C 779.0666666666667,414.6 882.9025641025642,420.0461538461539 958,405 C 1033.0974358974358,389.9538461538461 1079.4564102564102,354.4153846153846 1155,346 C 1230.5435897435898,337.5846153846154 1335.271794871795,356.2923076923077 1440,375 C 1440,375 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-2"
      ></path>
    </svg>
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

<style lang="scss" scoped>
.login-bg-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  /* height: 100vh;  */
  z-index: -1;
  overflow: hidden;
  transform: rotate(180deg);
}
</style>
