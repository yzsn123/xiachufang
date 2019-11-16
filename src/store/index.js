import Vue from 'vue'
import Vuex from 'vuex'
import kitchen from './kitchen/kitchen'
import attention from './attention/attention'
import interest from './attention/interest'
import story from './story/story'
import search from './search/searchDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    kitchen,
    attention,
    interest,
    story,
    search
  }
})
