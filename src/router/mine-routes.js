import store from '../store'
export default {
    path: '/mine',


    component:()=>{
        if(!store.state.isLogin){
            // console.log('未登录')
            return import('../pages/mine/root/children/Login')
        }else{
            return import('../pages/mine/root/mine')
        }

    },
    
}