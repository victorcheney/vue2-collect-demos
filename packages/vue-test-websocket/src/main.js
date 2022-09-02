import components from '@/components/index'
import SocketService from '@/utils/socket_service.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

SocketService.Instance.connect() // 连接websocket服务
// 挂载到vue原型对象
Vue.prototype.$socket = SocketService.Instance

Vue.use(components)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
