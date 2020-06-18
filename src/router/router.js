import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    //name值相当于该路由的名称 , 该种路由叫命名路由
    //可通过  <router-link :to=“{name:'About'}"}>Home</router-link> 访问该路由
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    //动态路由，不同的路径，跳转的都是同一页面
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    //嵌套路由，children是一个数组
    component: () => import('@/views/parent.vue'),
    children:[
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    //命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  }
]
