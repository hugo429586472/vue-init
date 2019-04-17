<template>
  <div class="home">
    <strong>
      这是一个基于Vue的项目
    </strong>
  </div>
</template>

<script>
import CurrentUser from '@/mixins/CurrentUser.vue'
import userApis from '@/apis/user/userApis.js'
export default {
  mixins: [CurrentUser],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    // 初始化
    init_all () {
      this.get_data()
    },
    // 请求接口示例
    async get_data () {
      let params = {}
      let res = await this.$fetch(userApis.menus, params, this)
      if (res.code >= 10000) {
        this.$Message.info('请求成功')
      } else {
        this.$Message.error(res.message)
      }
    }
  },
  created () {
    this.init_all()
  }
}
</script>

<style lang="sass" scoped>
.home
  height: 100%
  overflow-y: scroll
  width: 100%
  .home-head
    margin-left: 1px
    background-color: #fff
    padding: 20px
    .home-account
      .mod-account-avatar
        padding: 10px
        background-position: 0 0
        // padding: 4px 8px 11px 9px
        display: inline-block
        vertical-align: middle
        .ivu-avatar-image
          width: 80px
          height: 80px
          vertical-align: middle
      .mod-account-info
        width: calc(100% - 170px)
        position: relative
        display: inline-block
        // padding-top: 25px
        overflow: hidden
        vertical-align: middle
        .account-info-username
          font-size: 28px
          display: inline-block
        .account-info-verified
          display: inline-block
          font-size: 22px
          color: red
        .home-changelog
          font-size: 14px
          color: #999
  .home-content
    margin-top: 20px
    background-color: #fff
    padding: 20px
    .home-info-panel
      .info-title
        font-size: 22px
      .info-content
        font-size: 14px
        padding: 10px
</style>

