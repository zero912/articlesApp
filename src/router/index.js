import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/Nav.vue')
  },
  {
    path: '/container',
    name: 'container',
    component: () => import('../views/Container.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/Components.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
