// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'viewerjs/dist/viewer.css';
import Viewer from "v-viewer";
import {
  post,
  get,
  patch,
  put
} from './utils/request'

import './assets/css/common.scss';
import "./assets/plateform-font/iconfont.css";
import {
  formatDate
} from "./utils/date";
import store from './store/index';

Vue.use(ElementUI)
Vue.use(Viewer);
// Vue.use(store)
//Vue.use(MintUI)
Vue.config.productionTip = false

/* ------------------------Vue Global Variable------------------------------ */

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.request = function (config, {
  params,
  data
}) {
  if (config.method === "get") {
    return get(config.path, params)
  } else if (config.method === "post") {
    return post(config.path, data)
  }

}
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

Vue.filter('formatDay', function (value) {
  if (!value) {
    return "";
  }
  let date = new Date(value);
  return formatDate(date, 'yyyy-MM-dd')
})

Vue.filter('formatDate', function (value) {
  if (!value) {
    return "";
  }
  let date = new Date(value);
  return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
})