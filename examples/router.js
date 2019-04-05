import Vue from 'vue'
import Router from 'vue-router'
console.log(33, require('./app.vue'))
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: function(resolve) {
        require(['./app.vue'],resolve)
      }
    },
  ]
});
export default router;