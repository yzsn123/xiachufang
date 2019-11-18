import store from '../store'
export default {
    path: '/mine',
    beforeEnter(to,from,next){
        
        if(!localStorage.getItem('user')){
            store.commit('setPath',to.fullPath);
            next({
                path:'/mine/login'
            })
        }else{
            next();
        }
    },
    component:()=>import('../pages/mine/root/mine'),
  
}