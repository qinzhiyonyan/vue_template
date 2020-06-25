import Home from '@/views/Home'

export default [
  {
    path: '/',
    // 给当前path起一个别名，当访问/home_poge，展示内容和path路径展示内容一致
    alias:'/home_page',
    name: 'Home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: ((to, from, next) => {
       //可在此处作相应逻辑处理，必须调用next() ，不然不会发生跳转
      if(from.name === 'About') alert('这是从about来的')
      else alert('这不是从about来的')
      next()
    })
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    //name值相当于该路由的名称 , 该种路由叫命名路由
    //可通过  <router-link :to=“{name:'About'}"}>Home</router-link> 访问该路由
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    //路由元信息
    meta:{
      title:'关于'
    }
  },
  {
    path: '/argu/:name',
    //动态路由，不同的路径，跳转的都是同一页面
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name:'parent',
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
  },
  {
    //路由重定向, 有3种方式一种是重定向到某个路径，一种是重定向到路由名称，还支持函数式跳转
    path: '/main',
    //重定向至路由路径
    //redirect: '/',
    //重定向至路由名称
    /*redirect: {
      name: 'Home'
    }*/
    redirect:to => {
      console.log(to) //to是当前访问的路由对象
      //可处理某些逻辑，当to中的路径等于xxx，重定向xxx
      //return 可返回一个对象 return {name:'Home'}，也可返回路径 return '/', 可简写为 to => '/'
      return {
        name: 'Home'
      }
    }
  },
  {
    path:"*",
    component: () => import('@/views/error_404.vue')
  }
]
