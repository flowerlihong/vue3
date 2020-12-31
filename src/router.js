// vue3的路由配置  
import { createRouter, createWebHistory } from 'vue-router'
import Catelogue from './components/Catelogue'
import heChengApi from './components/heChengApi'
const routerHistory = createWebHistory()
 const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Catelogue
    },
    {
      path: '/index',
      component: Catelogue
    },
    {
      path: '/heCheng',
      component: heChengApi,
    },
    {
      path: '/chuanSong',
      component: () => import('./components/ChuanSong'),
    },
    {
      path: '/suiPian',
      component: () => import('./components/SuiPian'),
    },
    {
      path: '/option',
      component: () => import('./components/Option'),
    },
    {
      path: '/ordination',
      component: () => import('./components/Ordination'),
    },
    {
      path: '/global',
      component: () => import('./components/Global'),
    },
    {
      path: '/for',
      component: () => import('./components/For'),
    },
    {
      path: '/bind',
      component: () => import('./components/Bind'),
    },
    {
      path: '/emit',
      component: () => import('./components/Emit'),
    },
    {
      path: '/data',
      component: () => import('./components/Data'),
    },
    {
      path: '/watch',
      component: () => import('./components/Watch'),
    },
    {
      path: '/template',
      component: () => import('./components/Template'),
    },
    {
      path: '/filters',
      component: () => import('./components/Filters'),
    },
    // Vue-router4.0路由重定向，不支持通配符"*"。
    {
      path: '/:w+',
      redirect: '/index',
    },
  ]
})
export default router;
// vue2的路由配置
// 参照fe-h5项目
