import Vue from 'vue'
import Router from 'vue-router'

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
    {
      path: '/alert',
      name: 'alert',
      component: function(resolve) {
        require(['./demo/alert.vue'],resolve)
      }
    },
  ]
});
export default router;