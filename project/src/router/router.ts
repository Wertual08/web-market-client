import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FindPage from "@/pages/FindPage.vue"
import Main from "@/pages/Main.vue"
import About from "@/pages/About.vue"
import Catalog from "@/pages/Catalog.vue"
import ProductPage from '@/pages/ProductPage.vue'
import Cart from '@/pages/Cart.vue'
import AdminProductsPage from '@/pages/AdminProductsPage.vue'
import AdminProductPage from '@/pages/AdminProductPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Main
  },
  {
    path: "/search",
    component: FindPage,
    name: 'SearchPage',
    props: true 
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
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/admin/products',
    component: AdminProductsPage
  },
  {
    path: '/admin/products/:id',
    component: AdminProductPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
