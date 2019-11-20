import api from '../../utils/api'
import Http from '../../utils/Http'

const state = {
    LeftDiscoverData:[],
    RightDiscoverData:[],
}

const getters = {

}

const mutations = {
    setLeftDiscoverData(state,value){
        state.LeftDiscoverData = value;
    },
    setRightDiscoverData(state,value){
        state.RightDiscoverData = value;
    },
    setLoadingData(state,value){
        state.LoadingData = value;
    },
    setLoadMore(state,value){
        state.LoadMore = value;
    }
}
const actions = {
    async requestDiscoverData(context,value){
        const {data:result} = await Http.get(api.KITCHEN_DISCOVER_API);
        const DiscoverData = result.data[0].data;
        // console.log(DiscoverData);
        if(value == 0){
            var leftDiscoverData = [];
            var rightDiscoverData = [];
        } else{
            var leftDiscoverData = context.state.LeftDiscoverData;
            var rightDiscoverData = context.state.RightDiscoverData;
        }
        for(var i = 0;i<DiscoverData.length;i++){
            if(leftDiscoverData.length){
                var leftCount = 0;
                for(var j=0;j<leftDiscoverData.length;j++){
                    leftCount += parseInt(leftDiscoverData[j].imageHeight);
                }
            }
            if(rightDiscoverData.length){
                var rightCount = 0;
                for(var k=0;k<rightDiscoverData.length;k++){
                    rightCount += parseInt(rightDiscoverData[k].imageHeight);
                }
            }
            if(leftCount>=rightCount || rightCount == undefined){
                rightDiscoverData.push(DiscoverData[i]);
            } else {
                leftDiscoverData.push(DiscoverData[i]);
            } 
        }
        context.commit('setLoadingData',true);
        context.commit('setLoadMore',true);
        context.commit('setLeftDiscoverData',leftDiscoverData);
        context.commit('setRightDiscoverData',rightDiscoverData);
    }   
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}