import Vue from 'vue'
import VueRouter from 'vue-router'
import kitchenRouter from './kitchen-routes'
import classRouter from './class-router'
import mineRouter from './mine-routes'
import marketRouter from './market-routes'
import collectRouter from './collect-routes'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/kitchen'
  },
  {
    path: '/login',
    component: () => import('../pages/mine/login/login')
  },
  kitchenRouter,
  classRouter,
  mineRouter,
  marketRouter,
  {
    path: '/mine/login',
    component: () => import('../pages/mine/root/children/Login.vue'),
    beforeEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        next({
          path: '/mine'
        })
      } else {
        next();
      }
    }
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
