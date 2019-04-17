import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

// 路由模块
// import user from '@/routers/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      // component: resolve => require(['@/components/layout/Application.vue'], resolve),
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { 
          name: 'home',
          path: '',
          component: Home,
          meta: {
            title: 'vue-主页',
            bread: [
              {title: '主页'}
            ]
          } 
        }
        // ...其他子路由
      ]
    }
  ]
})
