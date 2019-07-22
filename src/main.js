import Vue from 'vue'

import App from './App.vue'

import { store } from './store/store'
import { router } from './route/router'
// Vue.config.productionTip = false

// intialize app
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
