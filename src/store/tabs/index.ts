import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
const useTabsStore = defineStore({
  id: 'tabs-store',
  state: () => ({
    openTab: [],
    activeIndex: 'console',
    breadcrumb_parent: '',
    breadcrumb_child: '',
  }),
  // Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能
  getters: {
    getActiveIndex: (state) => state.activeIndex,
  },
  actions: {
    addTabs(data: any): void {
      this.openTab.push(data)
      //缓存
      useLocalStorage('TABS-ROUTER', {
        expire: '123',
        value: this.openTab,
        activeTab: this.getActiveIndex,
      })
    },
    deleteTabs(route: any) {
      let index = 0
      for (let gohh of this.openTab) {
        if (gohh.route === route) {
          break
        }
        index++
      }
      this.openTab.splice(index, 1)
      //缓存
      useLocalStorage('TABS-ROUTER', {
        expire: '123',
        value: this.openTab,
        activeTab: this.getActiveIndex,
      })
    },
    setActiveIndex(route: string): void {
      this.activeIndex = route
      //缓存
      useLocalStorage('TABS-ROUTER', {
        expire: '123',
        value: this.openTab,
        activeTab: route,
      })
    },
  },
})

export default useTabsStore
