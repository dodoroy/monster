import Vue from 'vue'

import { sync } from 'vuex-router-sync'
import App from '@/App'
import store from '@/store'
import router from '@/router'

import '@/plugins/element.js'
import '@/registerServiceWorker'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
