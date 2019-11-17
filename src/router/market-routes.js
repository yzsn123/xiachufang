export default {
  path: '/market',
  component: () => import('../pages/market/root/market'),
  children: [
    {
      path: 'detail/:id',
      props: true,
      component: () => import('../pages/market/detail/Detail'),
      children: [
        
      ]
    },
    {
      path: 'order',
      component: () => import('../pages/market/order/Order'),
    },
    {
      path: 'foodcategory/:id',
      props: true,
      component: () => import('../pages/market/food-category/Food'),
    },

    {
      path: 'search',
      component: () => import('../pages/market/root/children/Search'),
    }
  ]
}