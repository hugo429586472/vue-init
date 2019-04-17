import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

// 导入store
import sto from 'store'

// cookie操作
import Cookies from 'js-cookie'

// localstorage封装使用
import LocalStorage from '@/utils/localstorage'

// 接口操作
import fetch from '@/apis/fetch/index'

// 使用iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.component(sDatePicker.name, sDatePicker)
Vue.use(iView)

// 全局设置store
Vue.prototype.$sto = sto

Vue.prototype.$cookies = Cookies
Vue.prototype.$lsto = new LocalStorage()

// 路由前置操作
router.beforeEach((to, from, next) => {
  if (!to.meta.out_auth && !sto.get('login')) {
    next({
      path: '/user/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

// i18n
// let local = sto.get('i18n')
// if (!local) {
//   local = 'zh'
//   sto.set('i18n', 'zh')
// }
// const i18n = new VueI18n({
//   locale: local,
//   messages
// })

Vue.config.productionTip = false

Vue.use(sDatePicker)

const vueTarget = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
})

Vue.prototype.$fetch = (optons, params, vue = vueTarget) => fetch(optons, params, vue)

vueTarget.$mount('#app')
