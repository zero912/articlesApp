import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = "http://localhost:3000"
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
