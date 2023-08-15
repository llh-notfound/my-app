import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js';
import store from './store';
import './api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI);


//挂载到页面上
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
