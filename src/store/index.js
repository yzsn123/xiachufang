import Vue from 'vue'
import Vuex from 'vuex'
import kitchen from './kitchen/kitchen'
import attention from './attention/attention'
import interest from './attention/interest'
import story from './story/story'
import search from './search/searchDetail'
import Class from './class/index'
import mine from './mine/index'
import marketOrder from './marketOrder'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced:true,
  state: {
    isLogin:false,
    path:'/mine'
  },
  mutations: {
    setIsLogin(state,flag){
      state.isLogin = flag;
    },
    setPath(state,val){
      state.path = val;
  }
  },
  actions: {
  },
  modules: {
    kitchen,
    attention,
    interest,
    story,
    search,
    mine,
    marketOrder,
    Class
  }
})
