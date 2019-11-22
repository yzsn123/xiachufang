export default{
    path:'/kitchen',
    component:()=>import('../pages/kitchen/root/kitchen'),
    children:[
        {
            path:'message',
            component:()=>import('../pages/kitchen/message/message.vue'),
            children:[
                {
                    path:'follow',
                    component:()=>import('../pages/kitchen/message/children/follow.vue'),
                },
                {
                    path:'fans',
                    component:()=>import('../pages/kitchen/message/children/fans.vue'),
                },
                {
                    path:'collect',
                    component:()=>import('../pages/kitchen/message/children/collect.vue'),
                    children:[
                        {
                            path:'setting',
                            component:()=>import('../pages/kitchen/message/children/setting')
                        }
                    ]
                },
                {
                    path:'inform',
                    component:()=>import('../pages/kitchen/message/children/inform.vue'),
                },
                {
                    path:'recommend',
                    component:()=>import('../pages/kitchen/message/children/recommend.vue'),
                }
            ]
        },
        {
            path:'search',
            component:()=>import('../pages/kitchen/search/search.vue'),
            children:[
                {
                    path:'detail/:name',
                    props:true,
                    component:()=>import('../pages/kitchen/search/children/detail.vue'),
                    children:[
                        {
                            path:'detailInfo/:index',
                            props:true,
                            component:()=>import('../pages/kitchen/detail/detail.vue')
                        }
                    ]
                },
            ]
        },
        {
            path:'classify',
            component:()=>import('../pages/kitchen/discover/children/classify.vue')
        },
        {
            path:'detail/:id',
            component:()=>import('../pages/kitchen/detail/detail.vue')
        }
    ]
}