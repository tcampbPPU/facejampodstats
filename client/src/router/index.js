import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  // By default we load in the home page, the rest of page lazy loaded in
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rankings',
    name: 'Rankings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Rankings.vue')
    }
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/Test.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history' // Gets rid of # char in the URL
})

export default router
