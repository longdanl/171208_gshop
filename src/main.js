// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入路由器
new Vue({
  el:"#app",
  render:h =>h(App),
  router//配置路由器
})

