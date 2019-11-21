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
import Http from '../utils/Http'
import api from '../utils/api';
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    isLogin: false,
    path: '/mine',
    tel: null
  },
  mutations: {
    setIsLogin(state, flag) {
      state.isLogin = flag;
    },
    setPath(state, val) {
      state.path = val;
    },
    setTel(state,tel){
      state.tel = tel;
    }
  },
  actions: {
    //检查是否登录
    async requestCheckLogin(context) {
      let result = await Http.get(api.CHECK_LOGIN);
      // console.log(result.data);
      //如果登录了
      if (result.data.code == 0) {
        localStorage.setItem('user', true);
        context.commit('setIsLogin', true);
        context.commit('setTel',result.data.tel);
        console.log('登录了');
      } else {
         //如果没有登录，或者登录过期了
        localStorage.setItem('user', false);
        context.commit('setIsLogin', false);
        console.log('请重新登录');
      }
      return result.data.code;
    }
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