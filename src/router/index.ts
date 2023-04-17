import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheDashboardLayoutVue from '@/layout/TheDashboardLayout.vue'
import TheDefaultLayoutVue from '@/layout/TheDefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'Login',
    component: () => import('../views//Auth/MyLogin.vue'),
    meta: {
      layout: TheDefaultLayoutVue
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/MyRegister.vue'),
    meta: {
      layout: TheDefaultLayoutVue
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      layout: TheDashboardLayoutVue
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
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
