import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  //在此处注册为全局对象后，可用this.$store访问路由实例
  router,
  store,
  render: h => h(App)
}).$mount('#app')
