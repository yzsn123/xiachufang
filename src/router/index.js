import Vue from 'vue'
import VueRouter from 'vue-router'
import kitchenRouter from './kitchen-routes'
import classRouter from './class-router'
import mineRouter from './mine-routes'
import marketRouter from './market-routes'
import collectRouter from './collect-routes'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/kitchen'
  },
  {
    path: '/login',
    component: () => import('../pages/mine/login/Login')
  },
  kitchenRouter,
  classRouter,
  mineRouter,
  marketRouter,
  collectRouter,
  {
    path: '/mine/login',
    component: () => import('../pages/mine/root/children/Login.vue'),
    
  },
  {
    path: '/404',
    component: () => import('../pages/common/not-find/NotFind')
  },
  {
    path: '**',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
