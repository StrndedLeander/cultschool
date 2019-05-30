import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bulma from "./assets/sass/main.scss";
import VeeValidate from 'vee-validate';
import { server } from './APIService/APIService'

Vue.use(VeeValidate);

Vue.use(bulma);

Vue.config.productionTip = false
Vue.prototype.$http = server

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
