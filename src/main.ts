import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import { sync } from 'vuex-router-sync'

import '@/plugins/element.js'
import '@/registerServiceWorker'

import './prototype.js'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
