import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

// 路由模块
import user from '@/routers/user'
import event from '@/routers/event'
import applicant from '@/routers/applicant'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: resolve => require(['@/components/layout/Application.vue'], resolve),
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { 
          name: 'home',path: '', component: Home,
          meta: {
            title: '未来网-主页',
            bread: [
              {title: '主页'}
            ]
          } 
        }
        // ...其他子路由
      ]
    },
    {
      path: '/',
      component: resolve => require(['@/components/layout/Application.vue'], resolve),
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { 
          name: 'home',path: '', component: Home,
          meta: {
            title: '未来网-主页',
            bread: [
              {title: '主页'}
            ]
          } 
        }
        // ...其他子路由
      ]
    },
    {
      path: '/init_user_info',
      name: 'init_user_info',
      component: resolve => require(['@/views/user/init_user_info.vue'], resolve)
    },
    ...user,
    ...event,
    ...applicant,
    { 
      path: '*',
      component: resolve => require(['@/views/404.vue'], resolve)
    }
  ]
})
