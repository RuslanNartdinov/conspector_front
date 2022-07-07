import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
