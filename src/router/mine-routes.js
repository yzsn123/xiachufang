import store from '../store'
export default {
    path: '/mine',
    beforeEnter(to,from,next){
        
        if(!localStorage.getItem('user') || localStorage.getItem('user') == 'false'){
            store.commit('setPath',to.fullPath);
            next({
                path:'/mine/login'
            })
        }else{
            next();
        }
    },
    component:()=>import('../pages/mine/root/mine'),
    children:[
        {
            path:'set',
            component:()=>import('../pages/mine/set/set.vue')
        },
        {
            path:'edit',
            component:()=>import('../pages/mine/edit/edit.vue')
        }
    ]
}