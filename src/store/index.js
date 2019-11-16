import Vue from 'vue'
import Vuex from 'vuex'

import Class from './class/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    setIsLogin(state,flag){
      state.isLogin = flag;
    }
  },
  actions: {
  },
  modules: {
    Class
  }
})
