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
    buyNowList:[],
    addCartList:[],

  },
  mutations: {
    //立即购买
    selectProduct(state,value){
      //数组等于当前数组
      state.buyNowList = value;
    },
    titleInfo(state,value){
      state.title = value;
    },
    addCartStatus(state,value){
      state.status = value;
    },
    //购物车
    addCartList(state,value){
      state.addCartList.push(value);      
    }
  },
  actions: {

  }
  
}