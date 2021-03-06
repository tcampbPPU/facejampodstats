import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from  'axios';
import moment from 'moment';
import _ from 'lodash'; 

require('@/assets/styles/main.css')


Vue.config.productionTip = false

Vue.prototype.$http = axios
const token = localStorage.getItem("token")
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.prototype.moment = moment

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
