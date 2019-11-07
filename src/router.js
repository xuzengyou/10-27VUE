import Vue from 'vue'
import Router from 'vue-router'

import login from './views/login.vue'
import Wzlb from './views/Wzlb.vue'
import GGtp from './views/GGtp.vue'
import Fbwz from './views/Fbwz.vue'
import XFbwz from './views/XFbwz.vue'
// 404
import NotFoundComponent from './components/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: '/vue/',
  routes: [
    {
      path:"",component:() => import('./views/login.vue')
    },
    {
      path:"/login",component:() => import('./views/login.vue')
    },
    {
      path:"/",component:() => import('./views/login.vue')
    },
    
    {
      path: '/Wzlb',component: () => import('./views/Wzlb.vue')
    },
    {
      path: '/Fbwz',component: () => import('./views/Fbwz.vue')
    },
    {
      path: '/XFbwz',component: () => import('./views/XFbwz.vue')
    },
    {
      path: '/GGtp',component: () => import('./views/GGtp.vue')
    },
    {
      path: '/*',component: () => import('./components/NotFoundComponent.vue')
    }



  ]
});

