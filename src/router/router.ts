import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FindPage from "@/pages/FindPage.vue"
import MainPage from "@/pages/MainPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import CatalogPage from "@/pages/CatalogPage.vue"
import ProductPage from '@/pages/ProductPage.vue'
import CartPage from '@/pages/CartPage.vue'
import AdminProductsPage from '@/pages/AdminProductsPage.vue'
import AdminProductPage from '@/pages/AdminProductPage.vue'
import AdminSectionsPage from '@/pages/AdminSectionsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: "/search",
    component: FindPage,
    name: 'SearchPage',
    props: true 
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/catalog',
    component: CatalogPage,
  },
  {
    path: '/product/:id',
    component: ProductPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/admin/products',
    component: AdminProductsPage,
  },
  {
    path: '/admin/products/:id',
    component: AdminProductPage,
  },
  {
    path: '/admin/sections',
    component: AdminSectionsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
