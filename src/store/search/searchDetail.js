import api from '../../utils/api'
import Http from '../../utils/Http'
const state = {
    searchDetailList:[],
    ScoreDetailList:[],
    MoreDetailList:[],
    VideoDetailList:[],
}

const getters = {

}

const mutations = {
    setDetailList(state,value){
        state.searchDetailList = value;
    },
    setScoreDetail(state,value){
        state.ScoreDetailList = value;
    },
    setMoreDetail(state,value){
        state.MoreDetailList = value;
    },
    setVideoDetailList(state,value){
        state.VideoDetailList = value;
    }
}
const actions = {
      async requestSearchData(context,value){
        const {data:result} = await Http.get(api.KITCHEN_SEARCH_API,{id:value});
        // console.log(result);
        const data = result.data.data;
        const DetailData = JSON.parse(JSON.stringify(data));



        // const MoreData = data.sort(compare('done'));
        // const ScoreData = data.sort(compare('grad'));

        const MoreData = JSON.parse(JSON.stringify(data.sort(
           function(a,b){
            return b["done"] - a["done"];
        })));

        const ScoreData = JSON.parse(JSON.stringify(data.sort(
            function(a,b){
                return b["grad"] - a["grad"];
            }
        )));
        context.commit('setDetailList',DetailData);
        context.commit('setScoreDetail',ScoreData);
        context.commit('setMoreDetail',MoreData);
        context.commit('setVideoDetailList',DetailData);
      }
}
export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}