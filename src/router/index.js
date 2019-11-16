import Vue from 'vue'
import VueRouter from 'vue-router'
import kitchenRouter from './kitchen-routes'
import classRouter from './class-router'
import mineRouter from './mine-routes'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/kitchen'
  },
  kitchenRouter,
  classRouter,
  mineRouter,
  {
    path: '/404',
    component: ()=>import('../pages/common/not-find/NotFind')
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
