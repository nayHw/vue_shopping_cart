import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from '../pages/ProductView.vue'
import AboutView from  '../pages/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
