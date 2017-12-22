const route = [
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: 'hyui'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['../views/index.vue'], resolve),
    meta: {
      title: 'hyui'
    }
  }
];
export default route;
