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
      path: '/car/:carSlug/id/:id',
      name: 'Owner',
      component: () => import('../views/CarView.vue')
    },
    {
      path: '/car/:carSlug/id',
      name: 'CarDetail',
      redirect: to => {
        return { path: '/find', query: { cars: 'all' } }
      },
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
      path: '/fc',
      name: 'fc',
      component: () => import('../views/FCView.vue')
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
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0,behavior: 'smooth', }
  },
})

export default router
