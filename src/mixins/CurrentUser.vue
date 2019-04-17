<script>
export default {
  data () {
    return {
      user: this.$sto.get('user') || {}
    }
  },
  computed: {
    avatar () {
      return this.user.avatar && this.user.avatar !== '' ? this.user.avatar : require('@/assets/images/home/default_avatar.jpg')
    }
  },
  methods: {
    // 更新用戶信息
    updateUserInfo () {
      this.user = this.$sto.get('user') || {}
    },
    // 获取用户信息
    async getUserInfo () {
      let res = await this.$fetch(userApis.user_info, params, this)
      if (res.code >= 10000) {
        this.$Message.info('保存成功')
        this.$sto.set('user', res.data.user)
        this.updateUserInfo()
      }
    }
  }
}
</script>
