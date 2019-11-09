

// 管理api
// export const HOST = 'http://localhost:9000';


/* 
#### 发送验证码
**method:** get
**参数:** tel   
*/
const SEND_CODE_API = '/api/user/send_code';


/* 
#### 注册
**method:** post
**参数:** tel      password
*/
const REGIESTER_API = '/api/user/regiester';

/* 
#### 登录
**method:** post
**参数:** tel   type('code',  'password' )  value 
*/
const LOGIN_API = '/api/user/login';

/*
检查登录
参数：无
*/
const CHECK_LOGIN = '/api/user/check_login'

/*
退出登录
参数：无
*/
const LOGOUT_API = '/api/user/logout';


/*
市集列表接口
*/
//市集全部分类的接口
const MARKET_KIND_API = '/api/market/kind';

//市集内容推荐接口
const MARKET_SUGGEST_API = '/api/market/suggest';

//市集商品接口
const MARKET_GOODLIST_API = '/api/market/goodList';

//市集商品详情接口
const MARKET_DETAIL_API = 'api/market/detail';


/**
 * 下厨房接口
*/
//下厨房发现接口
const KITCHEN_DISCOVER_API = '/api/kitchen/discover';

//下厨房发现为你推荐的详情
const KITCHEN_DISCOVER_DETAI_API = '/api/kitchen/discover/detail';

//下厨房关注接口
const KITCHEN_ATTENTION_API = '/api/kitchen/attention';

//下厨房故事接口
const KITCHEN_STORY_API = '/api/kitchen/story';

//下厨房搜索接口
const KITCHEN_SEARCH_API = 'api/kitchen/search'

/*
课堂接口
*/


/*
收藏接口
*/
//收藏菜单接口
const COLLECT_MENU_API = '/api/collect/menu';

//收藏课程接口
const COLLECT_CLASS_API = '/api/collect/class';

//收藏故事接口
const COLLECT_STORY_API = '/api/collect/story';

//浏览历史接口
const COLLECT_HISTORY_API =  '/api/collect/history';


/*
我的页面接口
*/
//订单接口
const ORDER_API = '/api/order';



export default {
  SEND_CODE_API,
  REGIESTER_API,
  LOGIN_API,
  CHECK_LOGIN,
  LOGOUT_API,
  MARKET_KIND_API,
  MARKET_SUGGEST_API,
  MARKET_GOODLIST_API,
  MARKET_DETAIL_API,
  KITCHEN_DISCOVER_API,
  KITCHEN_ATTENTION_API,
  KITCHEN_STORY_API,
  KITCHEN_DISCOVER_DETAI_API,
  KITCHEN_SEARCH_API,
  COLLECT_MENU_API,
  COLLECT_CLASS_API,
  COLLECT_STORY_API,
  COLLECT_HISTORY_API,
  ORDER_API
}
