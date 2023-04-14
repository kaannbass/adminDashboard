import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheDashboardLayoutVue from '@/layout/TheDashboardLayout.vue'
import TheDefaultLayoutVue from '@/layout/TheDefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyLogin.vue'),
    meta: {
      layout: TheDefaultLayoutVue
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: {
      layout: TheDashboardLayoutVue
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      layout: TheDashboardLayoutVue
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
