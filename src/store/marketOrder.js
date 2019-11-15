export default {
  namespaced:true,
  state: {
    selectId:String,
    selectPic:String,
    selectTit:String,
    selectNum:Number,
    selectInfo:{},
    currentPrice:Number
  },
  mutations: {
    selectProduct(state,value){
      state.selectId=value.selectId,
      state.selectPic=value.selectPic,
      state.selectTit=value.selectTit,
      state.selectNum=value.selectNum,
      state.selectInfo=value.selectInfo,
      state.currentPrice=value.currentPrice,
      console.log(state.currentPrice);
    }
  },
  actions: {

  }
  
}