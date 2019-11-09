import api from '../utils/api'
import Http from '../utils/Http'

export const requestGoodsListData = async ()=>{
  // 发送请求
  const {data: result} = await Http.get(api.GOODS_LIST_API, {id: '1043000'});
  // 判断请求的结果
  if(result.status === 0){
    // 处理数据
    const {currentCategory, categoryItemList} = result.data;
    //轮播图数据
    const bannerData = currentCategory.bannerList.map((item, index)=>({
      picUrl: item.picUrl,
      id: index
    }));
    // 处理商品列表数据
    const goodsData = categoryItemList.map(item=>{
      return {
        name: item.category.name,
        desc: item.category.frontDesc,
        itemList: item.itemList.map(goodsItem=>({
          id: goodsItem.id,
          name: goodsItem.name,
          picUrl: goodsItem.listPicUrl,
          retailPrice: goodsItem.retailPrice,
          counterPrice: goodsItem.counterPrice
        }))
      }
    })
    return {
      bannerData,
      goodsData
    }
  }else{
    // 失败了
    throw new Error(result.message);
  }
}

export default {
  requestGoodsListData
}