import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Profile from '@/components/Profile.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: { isPublic: true }
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const isAuthenticated = function () {
  return window.localStorage.token
}

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !isAuthenticated()) {
    return next({ name: 'login' })
  }

  if (to.name === 'login' && isAuthenticated()) {
    return next({ name: 'home' })
  }

  return next()
})

export default router
