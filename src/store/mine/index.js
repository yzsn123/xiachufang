import api from '../../utils/api'
import Http from '../../utils/Http'
import { request } from 'http'

const state = {

}

const mutations = {

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
        let result = await Http.post(api.LOGIN_AP,tel);
        if(result.data.code == 0){
            return null;
        }else{
            return result.data.message;
        }
    },
    //检查是否登录
    async requestCheckLogin(){
        let result = await Http.get(api.CHECK_LOGIN);
        return result.data.code;
    },

    //退出
    async requestLogout(){
        let result = await Http(api.LOGOUT_API);
        return result.data.code;
    }

}



export default {
    namespaced: true,
    state,
    mutations,
    actions
  }