# vue-init
```
使用vue-cli3搭建
使用axios、vuex、vue-router、iview、js-cookie
UI使用iview3(暂时只用于消息提示)

主要做了接口封装处理，路由文件引用
```

# 目录结构
### apis 接口相关
#### fetch 接口封装（基于axios)
```
index.js 封装接口请求, 业务逻辑相关
fetch.js 封装接口请, 初始化参数
```
### components 业务封装组件
### config 配置相关
```
index.js host配置等
```
### mixins 聚合
```
CurrentUser.vue 用户相关
LoginStep.vue 登录流程管理
Timer.vue 时间处理
```
### locales 国际化（中英文等）
### package 通用封装组件
### routers 路由文件
### test 测试相关（数据&接口拦截）
### utils 插件js
### views 页面vue文件
### App.vue
### main.js 项目入口文件
### router.js 路由入口文件
### store.js 状态流

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
