import api from '../../utils/api'
import Http from '../../utils/Http'

const state = {
    attentionList:[],
}

const getters = {

}

const mutations = {
    setAttentionList(state,value){
        state.attentionList = value;
    }
}
const actions = {
      async requestSearchData(context,value){
        const {data:result} = await Http.get(api.KITCHEN_SEARCH_API,{id:value});
        // console.log(result);
        const data = result.data.data;
        console.log(data);
      }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}