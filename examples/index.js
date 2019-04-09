import Vue from 'vue'
import router from './router'
import App from './app.vue'

// const app = new Vue({
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
