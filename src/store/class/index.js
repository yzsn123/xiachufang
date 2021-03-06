
import classService from '../../services/classService'
import { all } from 'q';
import { stat } from 'fs';


const state = {
  //所有内容的列表
  allList:null,
  //猜你喜欢的列表
  guessList:null,
  //分类点开的列表
  kindList:null,
  //分类点开的加载更多的列表
  kindListMore:null,
  //课程详情
  detailInfo:null
};

const mutations = {
  //设置所有内容列表
  setAllList(state,value){
    state.allList = value;
  },
  //设置猜你喜欢的列表
  setGuessList(state,value){
    state.guessList = value;
  },
  setKindList(state,value){
    state.kindList = value;
  },
  setKindListMore(state,value){
    state.kindListMore = value;
  },
  setDetail(state,value){
    state.detailInfo = value;
  }
};

const actions = {
  //获取所有内容列表
  async getAllList(context){
    let result = await classService.requestClass();
   
    let allList = result.data.data;
    context.commit('setAllList',allList);
  },
  //获取猜你喜欢的列表
  async getGuessList(context){
    let guessList = await classService.requestClassGuess();
    context.commit('setGuessList',guessList);
  },
  //获取分类点开的列表
  async getKindList(context){
    let kindList = await classService.requestKind();
    context.commit('setKindList',kindList);
  },
  //获取分类点开的列表的加载更多
  async getKindListMore(context){
    let kindListMore = await classService.requestKindMore();
    context.commit('setKindListMore',kindListMore);
  },
  //获取课程详情
  async getDetail(context,id){
    let detailInfo = await classService.requestDetail(id);
    context.commit('setDetail',detailInfo);
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }