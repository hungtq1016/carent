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
      path: '/find',
      name: 'FindCars',
      component: () => import('../views/FindView.vue')
    },
    {
      path: '/car/:id',
      name: 'CarDetail',
      component: () => import('../views/CarView.vue')
    },
    {
      path: '/car',
      name: 'Cars',
      redirect: to => {
        return { path: '/find', query: { cars: 'all' } }
      },
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
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
