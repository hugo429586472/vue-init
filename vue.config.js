const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = ['js', 'css']

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'development' || process.env.NODE_ENV !== 'test') {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8,
      }))
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true, // console
              drop_console: true,
              // pure_funcs:['console.log'] // 移除console
            },
          },
          sourceMap: false,
          parallel: true,
        }),
      )
    }
  },
  css: {
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。

    modules: false
  },
  devServer: {
    port: 5001, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器
    proxy: 'http://surpasspass.top:3499' // 配置跨域处理,只有一个代理
    // proxy: {
    //   "/api": {
    //     target: "",
    //     ws: true,
    //     changeOrigin: true
    //   }
    // } // 配置多个代理
  },
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
