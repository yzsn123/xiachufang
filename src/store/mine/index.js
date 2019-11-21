import api from '../../utils/api'
import Http from '../../utils/Http'
import { request } from 'http'

const state = {
    userInfo:null
}

const mutations = {
   setUserInfo(state,val){
    state.userInfo = val;
   }
}

const actions = {
    //发送验证码
    async sendCode(state,tel){
        // console.log('验证码发送',tel);
        let { data: result} = await Http.get(api.SEND_CODE_API,{tel});
        if(result.code == 0){
            return result.data.code;
        }else{
            //发送失败
            return null;
        }
    },
    //验证码登录
    async requestLogin(state,tel){
        
        let result = await Http.get(api.LOGIN_API,{tel});
        console.log(result.data);
        if(result.data.code == 0){
            return result.data;
        }else{
            return result.data.message;
        }
    },


    //退出
    async requestLogout(){
        // console.log('注销发送');
        let result = await Http.get(api.LOGOUT_API);
        // console.log(result);
        return result.data.code;
    },

    //添加信息
    async requestAddInfo(state,info){
        let result = await Http.get(api.ADDINFO_API,{info})
        // console.log(info);
        return result;
    },
    //查询信息
    async requestSearchInfo(){
        let result = await Http.get(api.SEARCHINFO_API);
        return result;
    }

}



export default {
    namespaced: true,
    state,
    mutations,
    actions
  }