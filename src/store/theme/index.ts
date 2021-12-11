/*
 * @Author: MarioGo
 * @Date: 2021-12-09 15:11:20
 * @LastEditTime: 2021-12-09 15:56:37
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/store/theme/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineStore } from 'pinia'
const delay = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log('token')
      resolve()
    }, 2000)
  })
}

const useThemeStore = defineStore({
  id: 'theme-store',
  state: () => ({
    ...defaultThemeSettings,
  }),
  // Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
  getters: {
    nameLength: (state) => state,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await post(data);
      await delay()
      // this.delay = data
    },
  },
})

const themeColorList = [
  '#409EFF',
  '#2d8cf0',
  '#0960bd',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
  '#FF3D68',
  '#00C1D4',
  '#71EFA3',
  '#171010',
  '#78DEC7',
  '#1768AC',
  '#FB9300',
  '#FC5404',
]
const defaultThemeSettings = {
  darkMode: false,
  themeColor: themeColorList[0],
  themeColorList,
  otherColor: {
    info: '#2080f0',
    success: '#67C23A',
    warning: '#E6A23C',
    error: '#F56C6C',
  },
  navStyle: {
    mode: 'vertical',
    theme: 'light',
  },
  menuStyle: {
    width: 200,
    collapsedWidth: 64,
    mixWidth: 80,
    mixCollapsedWidth: 48,
    horizontalPosition: 'flex-start',
    horizontalPositionList: [
      { value: 'flex-start', label: 'flex-start' },
      { value: 'center', label: 'center' },
      { value: 'flex-end', label: 'flex-end' },
    ],
  },
  headerStyle: {
    height: 56,
    bgColor: '#fff',
  },
  multiTabStyle: {
    height: 44,
    visible: true,
    bgColor: '#fff',
    mode: 'chrome',
    isCache: true,
    modeList: [
      { value: 'button', label: 'button' },
      { value: 'chrome', label: 'chrome' },
    ],
  },
  crumbsStyle: {
    visible: true,
    showIcon: true,
  },
  footerStyle: {
    height: 48,
  },
  pageStyle: {
    animate: true,
    animateType: 'fade-slide',
    animateTypeList: [
      { value: 'zoom-fade', label: 'zoom-fade' },
      { value: 'zoom-out', label: 'zoom-out' },
      { value: 'fade-slide', label: 'fade-slide' },
      { value: 'fade', label: 'fade' },
      { value: 'fade-bottom', label: 'fade-bottom' },
      { value: 'fade-scale', label: 'fade-scale' },
    ],
  },
  fixedHeaderAndTab: true,
  showReload: true,
}
export default useThemeStore
