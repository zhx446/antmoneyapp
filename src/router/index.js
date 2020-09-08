import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Find',
    component: Find
  },
  {
    path: '/optional',
    name: 'Optional',
    component: () => import('../views/Optional.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/asset',
    name: 'Asset',
    component: () => import('../views/Asset.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
