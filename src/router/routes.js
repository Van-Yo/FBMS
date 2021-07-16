const routes = [
    {
      path: '/',
      redirect:'/index',
      component: resolve => require(['../view/Home'], resolve),
      children : [
        {
          path : "index",
          component: resolve => require(['../view/home/index.vue'], resolve),
        },
        {
          path : "user",
          component: resolve => require(['../view/user/index.vue'], resolve),
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../view/Login'], resolve)
    }
];
export default routes