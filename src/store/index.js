import Vue from 'vue'
import Vuex from 'vuex'
import kitchen from './kitchen/kitchen'
import attention from './attention/attention'
import interest from './attention/interest'
import story from './story/story'
import search from './search/searchDetail'
import Class from './class/index'
import mine from './mine/index'
Vue.use(Vuex)

export default new Vuex.Store({
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
    Class,
    kitchen,
    attention,
    interest,
    story,
    search,
    mine
  }
})
