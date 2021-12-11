import { h } from 'vue'
import { NIcon } from 'naive-ui'

import {
  Cog as CogIcon,
  WineOutline as WineIcon,
  List as ListIcon,
  Bug as BugIon,
} from '@vicons/ionicons5'

import {
  DashboardFilled as DashboardIcon,
  SmileOutlined as SmileOutlinedIcon,
} from '@vicons/antd'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const menuOptions = [
  {
    label: 'Dashboard',
    key: 'Dashboard',
    icon: renderIcon(DashboardIcon),
    children: [
      {
        label: '主控台',
        key: 'console',
      },
      {
        label: '工作台',
        key: 'workbench',
      },
    ],
  },
  {
    label: '系统设置',
    key: 'setting',
    icon: renderIcon(CogIcon),
    children: [
      {
        label: '菜单权限管理',
        key: 'rat',
      },
      {
        label: '角色权限管理',
        key: 'rat',
      },
    ],
  },
  {
    label: '列表页面',
    key: 'baselist',
    icon: renderIcon(ListIcon),
    children: [
      {
        label: '基础列表',
        key: 'base-list',
      },
    ],
  },
  {
    label: '异常页面',
    key: 'error',
    icon: renderIcon(BugIon),
    children: [
      {
        label: '403',
        key: '403',
      },
      {
        label: '404',
        key: '404',
      },
      {
        label: '500',
        key: '500',
      },
    ],
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(SmileOutlinedIcon),
  },
]
