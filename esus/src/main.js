// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"


import "./assets/css/bootstrap.css"
import "./assets/js/bootstrap.min"
import "./assets/js/jquery-1.10.2.js"
// import "element-ui/lib/theme-chalk/index.css"

import axios from "axios"
Vue.prototype.$axios = axios;

import moment from 'moment'
Vue.prototype.$moment = moment;




Vue.config.productionTip = false;

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>',

})
