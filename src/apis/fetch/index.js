/**
 * Created by mickle.jiang on 2017/11/27.
 */
// 接口调用 业务相关
import config from '../../config/index'
import Fetch from '@/apis/fetch/fetch'
import Cookies from 'js-cookie'
/**
 *  isCrm 判断是否是连接的后台接口（域名不一样）
 */
// 正常返回
const successResponseJson = (responseJson, vue) => {
  if (responseJson.code === -62) {
    Cookies.remove('vue_auth')
    vue.$sto.remove('user')
    vue.$sto.set('login', false)
    vue.$router.push({name: 'login'})
  }
  return responseJson
}
// 后台未处理返回 400之类的
const failResponseJson = (status, responseJson, vue) => {
  if (status === '401' || status === 401) {
  } else if (status === '413' || status === 413) {
    vue.$Message.error('上传附件过大，请选择小于20M的文件')
  } else if (responseJson.name === 'RepeatRequestError') {
    // console.log(responseJson.message)
    throw responseJson.message
  } else if (status === 'cancle') {
    // 跳转新的路由后 中断上个路由中的所有未完成的请求
    throw responseJson.message
  } else {
    console.log(responseJson)
    vue.$Message.error('请求错误，请联系客服')
    throw new Error('调用接口错误')
  }
}

// 业务默认参数
const defaultOptions = {
  type: 'post' // 默认post请求
  // use_session: true // 默认使用session
}

export default async(options, params, vue) => {
  let fetch = new Fetch()
  let outOptions = options
  for (let key in defaultOptions) {
    if (options[key] === undefined || options[key] === null) {
      outOptions[key] = defaultOptions[key]
    }
  }
  let url = outOptions['path'] // 接口路径
  url = `${config.host}/api${url}`
  const type = outOptions.type
  // if (isCrm) {
  //   url = `${config.crm_host}${url}`
  // } else {
  //   url = `${config.host}${url}`
  // }
  let result = await fetch.request(type, url, params, outOptions)
  if (result.status === true) {
    return successResponseJson(result.data, vue)
  } else {
    failResponseJson(result.status, result.data, vue)
  }
}