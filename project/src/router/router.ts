import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FindPage from "@/pages/FindPage.vue"
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Catalog from "@/pages/Catalog.vue";
import ProductPage from '@/pages/ProductPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main
  },
  {
    path: "/search",
    component: FindPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/catalog',
    component: Catalog
  },
  {
    path: '/product/:id',
    component: ProductPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
