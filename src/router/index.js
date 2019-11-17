import Vue from 'vue'
import VueRouter from 'vue-router'
import kitchenRouter from './kitchen-routes'
import collectRouter from './collect-routes'
import marketRouter from './market-routes'
import classroomRouter from './classroom-routes'
import mineRouter from './mine-routes'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/market'
  },
  // kitchenRouter,
  // collectRouter,
  marketRouter,
  // classroomRouter,
  // mineRouter,
  {
    path: '/login',
    // component: ()=>import('../pages/mine/login/Login')
  },
  {
    path: '/regiester',
    // component: ()=>import('../pages/mine/regiester/Regiester')
  },
  {
    path: '/404',
    // component: ()=>import('../pages/common/not-find/NotFind')
  },
  {
    path: '**',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

