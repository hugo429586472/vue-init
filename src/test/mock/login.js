import Mock from 'mockjs'
import { users,menus  }  from '@/test/data/user'
import {deat_options} from './deal'

// 登录
Mock.mock(/\/user\/login/, 'post', (options) => {
  let result = {
    code: 999,
    data: {},
    message: '账号或密码错误'
  }
  let opt = deat_options(options)
  console.log(opt)
  if (opt.account && opt.password) {
    for (let user of users) {
      console.log(user)
      if (user.account.toString() === opt.account.toString() && user.password.toString() === opt.password.toString()) {
        result.data.user = user
        result.data.session_id = Mock.mock('@string|10')
        result.code = 10000
        break
      }
    }
  } else {
    // result.code = 777
    // result.message = '请输入账号或密码'
    result.data.user = users[0]
    result.data.session_id = Mock.mock('@string|10')
    result.code = 10000
  }
  return result
})

// 左侧菜单栏
Mock.mock(/\/user\/menus/, 'post', () => {
  let result = {
    code: 10000,
    data: {},
    message: 'success'
  }
  result.data.menus = menus['manager']
  console.log(result)
  return result
})