import api from '../utils/api'
import Http from '../utils/Http'

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


export default {
  requestMarketGoodListDate,
  requestDetailDate
}