
import classService from '../../services/classService'
import { all } from 'q';


const state = {
  //所有内容的列表
  allList:null,
  //猜你喜欢的列表
  guessList:null
};

const mutations = {
  //设置所有内容列表
  setAllList(state,value){
    state.allList = value;
    // console.log(state.allList,value);
  },
  //设置猜你喜欢的列表
  setGuessList(state,value){
    state.guessList = value;
  }
};

const actions = {
  //获取所有内容列表
  async getAllList(context){
    let result = await classService.requestClass();
    // console.log(allList);
    let allList = result.data.data;
    context.commit('setAllList',allList);
  },
  //获取猜你喜欢的列表
  async getGuessList(context){
    let guessList = await classService.requestClassGuess();
    context.commit('setGuessList',guessList);
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }