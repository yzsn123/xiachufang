import api from '../utils/api'
import Http from '../utils/Http'

//请求class首页所有的数据
export const requestClass = async()=>{
    let result = await Http.get(api.CLASS_ALL_API);
    // console.log(result);
    return result;
}
//请求猜你喜欢的列表
export const requestClassGuess = async()=>{
    let result = await Http.get(api.CLASS_GUESS_API);
    return result;
}
//获取分类点开的列表
export const requestKind = async()=>{
    let result = await Http.get(api.CLASS_KIND_API);
    return result;
}
//获取分类加载更多
export const requestKindMore = async()=>{
    let result = await Http.get(api.CLASS_KIND_GOODLIST_API);
    return result;
}
//课程详情
export const requestDetail = async(id)=>{
    let result = await Http.get(api.CLASS_DETAIL_API,id);
    // console.log(id);
    return result;
}
export default {
    requestClass,
    requestClassGuess,
    requestKind,
    requestKindMore,
    requestDetail
}
