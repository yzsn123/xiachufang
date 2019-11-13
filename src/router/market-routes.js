export default{
    path:'/market',
    component:()=>import('../pages/market/root/market'),
    children:[
       {
        path:'detail/:id',
        props:true,
        component:()=>import('../pages/market/detail/Detail'),
       },
       {
         path:'foodcategory/:id',
         props:true,
         component:()=>import('../pages/market/food-category/Food'),
       }
    ]
}