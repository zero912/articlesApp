import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [{
      path: 'index',
      component: () => import('../views/Index.vue')
    },{
      path: 'me',
      component: () => import('../views/Me.vue')
    },]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('../testing/Field.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../testing/Nav.vue')
  },
  {
    path: '/inf',
    name: 'inf',
    component: () => import('../testing/Inf.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
