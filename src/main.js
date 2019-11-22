import Vue from 'vue'
import plugin from './plugin'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

Vue.$center = Vue.prototype.$center = new Vue();
import './style/market.scss'



Vue.config.productionTip = false


Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
