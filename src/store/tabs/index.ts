import { defineStore } from 'pinia'

const useTabsStore = defineStore({
  id: 'tabs-store',
  state: () => ({
    openTab: [],
    activeIndex: '',
  }),
  actions: {
    addTabs(data: any): void {
      this.openTab.push(data)
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
    },
    setActiveIndex(index: string): void {
      this.activeIndex = index
    },
  },
})

export default useTabsStore
