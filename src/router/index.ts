import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TopView.vue')
    },
    {
      path: '/seat/:id',
      name: 'seat',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/brand/:id',
      name: 'brand',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rent',
      name: 'rent',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
