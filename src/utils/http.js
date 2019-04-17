/**
 * http配置
 */
// import config from '../config/index'
import axios from 'axios'
let qs = require('qs')
// const CancelToken = axios.CancelToken // 取消请求
const clearRequest = {
  source: {
    token: null,
    cancel: null
  }
}
// 超时时间
axios.defaults.timeout = 30000
// 重复请求判定时间
const repeatSetTime = 500
// axios.defaults.baseURL = config.host
// http请求拦截器
axios.interceptors.request.use(config => {
  // config.data = qs.stringify(config.data)
  // config.headers = {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
  // config.cancelToken = clearRequest.source.token
  // let requestMes = getRequestIdentify(config)
  // removePending(requestMes, !config.canRepeat)
  return config
}, error => {
  return Promise.reject(error)
})
// 处理重复请求
let pending = {}
/**
 * config: 请求数据
 * 给每个请求加上标识
 */
const getRequestIdentify = (config, isReuest = false) => {
  let url = config.url
  if (isReuest) {
    url = config.baseURL + config.url.substring(1, config.url.length)
  }
  return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
}
// key: 请求标识；isRequest 完成请求后也需要执行删除记录，所以添加此参数避免执行无用操作
const removePending = (key, isRequest = false) => {
  if (pending[key] && pending[key].t && isRequest) {
    // pending[key]中存放cancelToken对象
    const nowT = Date.now()
    // 2秒内重复请求取消
    if (nowT - pending[key].t <= repeatSetTime) {
      let err = new Error('重复请求')
      err.name = 'RepeatRequestError'
      throw err
    } else {
      // delete pending[key] // 把这条记录从 pending 中移除
      pending[key] = {
        t: Date.now()
      }
    }
  } else if (isRequest) {
    pending[key] = {
      t: Date.now()
    }
  }
}
// http响应拦截器
// axios.interceptors.response.use(data => {
//   return data
// }, error => {
//   console.log('res error...')
//   return Promise.reject(error)
// })
export default {axios, clearRequest}