/**
 * 封装接口请求，初始化参数
 * @author  hugo
 */
// store为实例化生成的
import sto from 'store'
import config from '@/config/index'
import axios from '@/utils/http'
import axios1 from 'axios'
import Cookies from 'js-cookie'
let crypto = require('crypto')
import LocalStorage from '@/assets/js/localstorage.js'

class Fetch {
  // 处理传到后台参数(通用)
  dealParams(params, needles = {}) {
    let param = params
    param['port_ver'] = config.version // 判断前端代码版本
    param['lan'] = sto.get('i18n', 'zh')
    if (!needles.without_session) {
      param['session_id'] = Cookies.get('vue_auth')
    }
    return param
  }

  // 发起请求
  async request(type, url, params, needles = {}) {
    let _this = this
    _this.mock() // 使用mock
    const param = this.dealParams(params, needles)
    try {
      let requestH = {
        method: type,
        url: url,
        canRepeat: needles.canRepeat || false,
        cancelToken: axios1.CancelToken.source().token,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          // 'Access-Control-Allow-Origin': '*',
          'Accept': '*'
        }
      }
      // post和get的传参不一样
      if (type === 'post') {
        requestH.data = param
      } else {
        requestH.params = param
      }
      // axios.axios.defaults.withCredentials = true
      if (needles.useCache && this.storage(url)) {
        // 使用缓存
        return _this.dealSuccessResponse({data: this.storage(url), code: 10000})
      } else {
        res = await axios.axios(requestH)
        if (res.data.code >= 10000 && needles.useCache) {
          this.setStorage(url, res.data)
        }
        return _this.dealSuccessResponse(res)
      }
    } catch (e) {
      return _this.dealFailResponse(e)
    }
  }

  // 使用mock
  mock () {
    // require('@/test/mock/login.js')
  }

  // 链接处理
  dealUrl (url) {
    let urlDel = url.replace(/.*localhost.*?\//, '').replace(/.*\.com\//, '').replace(/\?.*/, '') // eslint-disable-line
    return urlDel.split('/').join('_')
  }

  // 设置缓存
  setStorage (url, data) {
    const urlParse = this.dealUrl(url)
    // 缓存默认30分钟
    let localstorage = new LocalStorage()
    localstorage.set(urlParse, data)
  }

  // 使用缓存
  storage (url) {
    const urlParse = this.dealUrl(url)
    let localstorage = new LocalStorage()
    return localstorage.get(urlParse)
  }

  // 解密
  encrypt (text) {
    if (!text) {
      return ''
    }
    let algorithm = 'aes-256-ctr'
    let password = 'kjloiuyhz82mj29ks7m20hxm82b8s9a6'
    let piv = '1234567890123456'
    try {
      let cipher = crypto.createDecipheriv(algorithm, password, piv)
      let crypted = cipher.update(text, 'base64', 'utf8')
      crypted += cipher.final('utf8')
      return crypted
    } catch (e) {
      console.log(e)
    }
  }

  // 处理返回的正常请求
  dealSuccessResponse(res) {
    let data = res.data
    if (data.data) {
      // 解密
      // data.data = JSON.parse(this.encrypt(data.data))
    }
    return { status: true, data: data }
  }

  // 处理异常返回
  dealFailResponse(error) {
    if (error.response) {
      return { status: error.response.status, data: error.response.data }
    } else {
      return { status: 405, data: error }
    }
  }
}

export default Fetch
