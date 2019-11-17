import Vue from 'vue'
import Vuex from 'vuex'
import marketOrder from './marketOrder'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced:true,
  state: {
    name:'张三2'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    marketOrder
  }
})
