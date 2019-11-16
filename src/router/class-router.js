export default {
    path: '/classroom',
    component: () => import('../pages/classroom/root/classroom'),
    children: [{
        path: 'kind/:id',
        props:true,
        component:()=>import('../pages/classroom/kindClass/kindClass.vue')
    }]
}