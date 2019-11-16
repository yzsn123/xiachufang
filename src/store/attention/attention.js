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
      async requestAttentionData(context,value){
        const {data:result} = await Http.get(api.KITCHEN_ATTENTION_API);
        let List = result.data.list;
        console.log(List);
        let attentionList = context.state.attentionList;
        if(value===0){
            context.commit('setAttentionList',List);
        } else if(value===1){
            attentionList = [].concat(attentionList,List);
            context.commit('setAttentionList',attentionList);
        }
        
      }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}