<template>
  <div class="login-bg-bottom">
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 700"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e344"></stop>
          <stop offset="95%" stop-color="#32ded444"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,140 0,140 C 85.00769230769228,109.23589743589743 170.01538461538456,78.47179487179486 244,88 C 317.98461538461544,97.52820512820514 380.94615384615395,147.34871794871796 460,155 C 539.053846153846,162.65128205128204 634.1999999999999,128.13333333333333 713,118 C 791.8000000000001,107.86666666666667 854.2538461538461,122.11794871794872 932,117 C 1009.7461538461539,111.88205128205128 1102.7846153846153,87.3948717948718 1190,88 C 1277.2153846153847,88.6051282051282 1358.6076923076923,114.3025641025641 1440,140 C 1440,140 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e366"></stop>
          <stop offset="95%" stop-color="#32ded466"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,280 0,280 C 82.00769230769234,262.6589743589743 164.01538461538468,245.3179487179487 238,250 C 311.9846153846153,254.6820512820513 377.94615384615383,281.3871794871795 450,279 C 522.0538461538462,276.6128205128205 600.2,245.13333333333338 686,252 C 771.8,258.8666666666666 865.2538461538461,304.0794871794872 949,301 C 1032.746153846154,297.9205128205128 1106.7846153846156,246.54871794871795 1187,235 C 1267.2153846153844,223.45128205128205 1353.607692307692,251.72564102564104 1440,280 C 1440,280 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e388"></stop>
          <stop offset="95%" stop-color="#32ded488"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,420 0,420 C 70.04358974358973,415.4948717948718 140.08717948717947,410.9897435897436 235,414 C 329.91282051282053,417.0102564102564 449.6948717948719,427.5358974358974 522,439 C 594.3051282051281,450.4641025641026 619.1333333333333,462.8666666666667 698,462 C 776.8666666666667,461.1333333333333 909.7717948717948,446.9974358974359 1003,449 C 1096.2282051282052,451.0025641025641 1149.7794871794874,469.14358974358976 1216,467 C 1282.2205128205126,464.85641025641024 1361.1102564102562,442.42820512820515 1440,420 C 1440,420 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-2"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#0693e3ff"></stop>
          <stop offset="95%" stop-color="#32ded4ff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,560 0,560 C 81.22564102564107,532.1717948717949 162.45128205128213,504.34358974358975 237,520 C 311.54871794871787,535.6564102564103 379.4205128205127,594.7974358974359 458,612 C 536.5794871794873,629.2025641025641 625.8666666666667,604.4666666666666 719,595 C 812.1333333333333,585.5333333333334 909.1128205128205,591.3358974358976 983,574 C 1056.8871794871795,556.6641025641024 1107.6820512820514,516.1897435897436 1180,510 C 1252.3179487179486,503.81025641025644 1346.1589743589743,531.9051282051282 1440,560 C 1440,560 1440,700 1440,700 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150 path-3"
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
.login-bg-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  /* height: 100vh;  */
  z-index: -1;
  overflow: hidden;
}
</style>
