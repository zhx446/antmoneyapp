import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import animate from 'animate.css'
// import echarts from 'echarts'
import 'amfe-flexible'
import './css/font/iconfont.css'
import './css/font3/iconfont.js'

// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
