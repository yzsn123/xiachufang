export default {
  path: '/market',
  component: () => import('../pages/market/root/market'),
  children: [
    {
      path: 'detail/:id',
      props: true,
      name: 'detail',
      component: () => import('../pages/market/detail/Detail'),
      children: [
        {
          path: 'order',
          name: 'order',
          component: () => import('../pages/market/order/Order'),
        },
      ]
    },
    {
      path: 'foodcategory/:id',
      props: true,
      component: () => import('../pages/market/food-category/Food'),
    },
    {
      path: 'search',
      component: () => import('../pages/market/root/children/Search'),
    },
    {
      path: 'cart',
      component: () => import('../pages/market/root/children/Cart'),
    }
  ]
}