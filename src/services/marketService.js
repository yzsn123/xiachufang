import api from '../utils/api'
import Http from '../utils/Http'

// 首页商品
export const requestMarketGoodListDate = async () => {
  const { data: result } = await Http.get(api.MARKET_KIND_API);
  if (result.code === 0) {
    const { data: GoodListDate } = result.data
    return {
      GoodListDate
    }
  } else {
    throw new Error(result.message);
  }
}

// 商品详情
export const requestDetailDate = async (GoodsId)=>{
  const {data: result} = await Http.get(api.MARKET_DETAIL_API,{id:GoodsId});
  // console.log(result);
  if (result.code===0) {
    const detailData = result.data;
    return{
      detailData
    }
  } else {
    throw new Error('result.message');
  }
}

// 市集上新
export const requestMarketNewData = async ()=>{
  const {data: result} = await Http.get(api.MARKET_SUGGEST_API);
  // console.log(result);
  if (result.code ===0) {
    let MarketNewData= [];
    let MarketFreshData = null;
    result.data.filter((item,index)=>{
      if (index==0) {
        MarketFreshData = item;
      }
      if (index==1 || index==2 ) {
        MarketNewData.push(item);
      }
    })
    // console.log(MarketFreshData);
    // console.log(MarketNewData);
    
    return{
      MarketNewData:MarketNewData,
      MarketFreshData:MarketFreshData
    }
  }else{
    throw new Error('result.message');
  }
}




export default {
  requestMarketGoodListDate,
  requestDetailDate,
  requestMarketNewData
}