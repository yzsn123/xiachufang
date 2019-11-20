export default {
  namespaced:true,
  state: {
    selectId:String,
    selectPic:String,
    selectTit:String,
    selectNum:Number,
    selectInfo:{},
    currentPrice:Number,
    title:null,
    status:null,
    addCartList:[]
  },
  mutations: {
    selectProduct(state,value){
      state.selectId=value.selectId,
      state.selectPic=value.selectPic,
      state.selectTit=value.selectTit,
      state.selectNum=value.selectNum,
      state.selectInfo=value.selectInfo,
      state.currentPrice=value.currentPrice
    },
    titleInfo(state,value){
      state.title = value;
    },
    addCartStatus(state,value){
      state.status = value;
    },
    addCartList(state,value){
      state.addCartList.push(value);
      console.log(state.addCartList);
      
    }
  },
  actions: {

  }
  
}