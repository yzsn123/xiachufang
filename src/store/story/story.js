import api from '../../utils/api'
import Http from '../../utils/Http'

const state = {
    LeftStoryData:[],
    RightStoryData:[],
    BannerList:[],
}

const getters = {

}

const mutations = {
    setLeftStoryData(state,value){
        state.LeftStoryData = value;
    },
    setRightStoryData(state,value){
        state.RightStoryData = value;
    },
    setLoadingData(state,value){
        state.LoadingData = value;
    },
    setLoadMore(state,value){
        state.LoadMore = value;
    },
    setBannerList(state,value){
        state.BannerList = value;
    }
}
const actions = {
    async requestStoryData(context,value){
        const {data:result} = await Http.get(api.KITCHEN_STORY_API);
        // console.log(result);
        // const StoryData = result.data[0].data;
        const StoryData = result.data.content;
        const BannerList = result.data.bannerList;
        // console.log(BannerList);
        // console.log(StoryData);
        if(value == 0){
            var leftStoryData = [];
            var rightStoryData = [];
        } else{
            var leftStoryData = context.state.LeftStoryData;
            var rightStoryData = context.state.RightStoryData;
        }
        for(var i = 0;i<StoryData.length;i++){
            if(leftStoryData.length){
                var leftCount = 0;
                for(var j=0;j<leftStoryData.length;j++){
                    leftCount += parseInt(leftStoryData[j].imageHeight);
                }
            }
            if(rightStoryData.length){
                var rightCount = 0;
                for(var k=0;k<rightStoryData.length;k++){
                    rightCount += parseInt(rightStoryData[k].imageHeight);
                }
            }
            if(leftCount>=rightCount || rightCount == undefined){
                rightStoryData.push(StoryData[i]);
            } else {
                leftStoryData.push(StoryData[i]);
            } 
        }
        context.commit('setLoadingData',true);
        context.commit('setLoadMore',true);
        context.commit('setLeftStoryData',leftStoryData);
        context.commit('setRightStoryData',rightStoryData);
        context.commit('setBannerList',BannerList);
    }   
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}