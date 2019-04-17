<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import '@/assets/css/application.sass'
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {
    // 统计代码改为异步加载
    if (window.location.href.indexOf('innet-') !== -1 || window.location.href.indexOf('it-') !== -1 || window.location.href.indexOf('localhost') !== -1) {
      // localhost 统计用
      var _mtac = {}; // eslint-disable-line
      (function () {
        var mta = document.createElement('script') // eslint-disable-line
        mta.src = '//pingjs.qq.com/h5/stats.js?v2.0.4'
        mta.setAttribute('name', 'MTAH5')
        mta.setAttribute('sid', '500658967')

        var s = document.getElementsByTagName('script')[0] // eslint-disable-line
        s.parentNode.insertBefore(mta, s)
      })()
    } else {
      var _mtac = {}; // eslint-disable-line
      (function() {
        var mta = document.createElement("script"); // eslint-disable-line
        mta.src = '//pingjs.qq.com/h5/stats.js?v2.0.4'
        mta.setAttribute('name', 'MTAH5')
        mta.setAttribute('sid', '500678123')
        mta.setAttribute('cid', '500678124')
        var s = document.getElementsByTagName("script")[0]; // eslint-disable-line
        s.parentNode.insertBefore(mta, s)
      })()
    }
  },
  methods: {
  }
}
</script>

