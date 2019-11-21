import api from '../../utils/api'
import Http from '../../utils/Http'

const state = {
    detailList:[],
}

const getters = {

}

const mutations = {
    setDetailList(state,value){
        state.detailList = value;
    }
}
const actions = {
      async requestDetailData(context,value){
        const result = await Http.get(api.KITCHEN_DISCOVER_DETAI_API,{id:value});
        let detailList = result.data.data.data[0];
        context.commit('setDetailList',detailList);
      }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}