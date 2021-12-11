/*
 * @Author: MarioGo
 * @Date: 2021-12-09 14:09:24
 * @LastEditTime: 2021-12-10 16:57:57
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/src/router/index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
import Dashboard from '@views/dashboard/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@views/dashboard/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        redirect: '/dashboard/console',
        meta: {
          title: '控制台',
        },
        component: () => import('@/views/console/index.vue'),
      },
      {
        name: 'console',
        path: '/dashboard/console',
        meta: {
          title: '控制台',
        },
        component: () => import('@/views/console/index.vue'),
      },
      {
        name: 'workbench',
        path: '/dashboard/workbench',
        meta: {
          title: '工作台',
        },
        component: () => import('@views/workbench/index.vue'),
      },
      {
        name: 'about',
        path: '/about', //默认缺省值
        meta: {
          title: '关于',
        },
        component: () => import('@views/about/index.vue'),
      },
    ],
  },
  // {
  //   path: '/',
  //   name: 'login',
  //   props: true,
  //   component: Login,
  //   children: [
  //     {
  //       //在地址为空时，直接跳转pwd-login路由
  //       path: '', //默认缺省值
  //       redirect: '/login/pwd-login',
  //     },
  //     {
  //       //在地址login，直接跳转pwd-login路由
  //       path: '/login', //默认缺省值
  //       redirect: '/login/pwd-login',
  //     },
  //     {
  //       path: '/login/:id',
  //       name: 'login',
  //       props: true,
  //       component: Login,
  //     },
  //   ],
  // },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@views/notFound/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

// vue-router4.x 支持 typescript，配置路由的类型是 RouteRecordRaw，这里 meta 可以让我们有更多的发挥空间，这里提供一些参考：

// title:string; 页面标题，通常必选。
// icon?:string; 图标，一般配合菜单使用。
// auth?:boolean; 是否需要登录权限。
// ignoreAuth?:boolean; 是否忽略权限。
// roles?:RoleEnum[]; 可以访问的角色
// keepAlive?:boolean; 是否开启页面缓存
// hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
// order?:number; 菜单排序。
// frameUrl?:string; 嵌套外链。
