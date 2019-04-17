<script>
export default {
  data () {
    return {
      disable: false,
      time: 0,
      interval: '' // 计时器
    }
  },
  methods: {
    /**
     * 创建倒计时
     */
    createInterval (times = 60) {
      let _this = this
      if (_this.disable) {
        return
      }
      _this.disable = true
      _this.time = times
      // 创建定时器
      _this.interval = setInterval(function () {
        // 每秒循环改变文本值
        _this.time -= 1
        // 当计数器为0时，改变状态，重置数值
        if (_this.time === 0) {
          _this.disable = false
          _this.time = times
          // 关闭定时器
          clearInterval(_this.interval)
        }
      }, 1000)
    }
  }
}
</script>