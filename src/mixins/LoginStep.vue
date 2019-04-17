// 登陆状态流转
<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      loginStatus: {
        LOGIN_SUCCESS: 10000,
        REGISTER_SUCCESS: 20000
      }
    }
  },
  methods: {
    // 登陆成功
    login_success(data) {
      // 设置cookies
      // domain: 'future.com'
      Cookies.set('vue_auth', data.session, { expires: 7 })
      this.$sto.set('user', data.user)
      this.$sto.set('login', true)

      this.$Message.info('登录成功')
      this.$router.push({name: 'home'})
    },
    // 注册成功
    register_success (data) {
      Cookies.set('vue_auth', data.session, { expires: 7 })
      this.$sto.set('user', data.user)
      this.$sto.set('login', true)

      this.$Message.info('注册成功')
      this.$router.push({name: 'home'})
    },
    // 登出
    logout () {
      Cookies.remove('vue_auth')
      this.$sto.remove('user')
      this.$sto.set('login', false)
      this.$router.push({name: 'login'})
    },
    // 默认处理
    default_login_deal (res) {
      if (res.code > 0) {
        this.$Message.info(res.message)
      } else {
        this.$Message.error(res.message)
      }
    },
    // 登陆流程状态流转
    state_flow (res, form='login-form') {
      let _this = this
      const code = res.code
      const data = res.data
      switch (code) {
        case this.loginStatus.LOGIN_SUCCESS:
          _this.login_success(data)
          break
        case this.loginStatus.REGISTER_SUCCESS:
          _this.register_success(data)
          break
        default:
          _this.default_login_deal(res)  
      }
    }
  }
}
</script>
