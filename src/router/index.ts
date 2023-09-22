import { createRouter, createWebHistory } from 'vue-router'
import useAuthen from '@/lib/hook/useAuthen';
const isAuthen = useAuthen()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
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
      component: () => import('../views/FaqView.vue')
    },
    {
      path: '/fc',
      name: 'Fake Car',
      component: () => import('../views/FcView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/user/favorite',
      name: 'FavoritePage',
      component: () => import('../views/FavoriteView.vue'),
      beforeEnter: (to, from) => {
        if (!isAuthen) {
          return { name: 'Home' }
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0,behavior: 'smooth', }
  },
})

export default router
