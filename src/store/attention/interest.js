import api from '../../utils/api'
import Http from '../../utils/Http'

const state = {
    interestList:[],
}

const getters = {

}

const mutations = {
    setInterestList(state,value){
        state.interestList = value;
    }
}
const actions = {
      async requestInterestData(context){
        const {data:result} = await Http.get(api.KITCHEN_ATTENTION_INTEREST_APi);
        let List = result.data.list;
        console.log(List);
        context.commit('setInterestList',List);
      }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}