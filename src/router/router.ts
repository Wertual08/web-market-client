import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FindView from "@/views/FindView.vue"
import MainView from "@/views/MainView.vue"
import AboutView from "@/views/AboutView.vue"
import CatalogView from "@/views/CatalogView.vue"
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import AdminProductsView from '@/views/AdminProductsView.vue'
import AdminProductView from '@/views/AdminProductView.vue'
import AdminSectionsView from '@/views/AdminSectionsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainView
  },
  {
    path: "/search",
    component: FindView,
    name: 'SearchPage',
    props: true 
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/catalog',
    component: CatalogView,
  },
  {
    path: '/product/:id',
    component: ProductView,
  },
  {
    path: '/cart',
    component: CartView,
  },
  {
    path: '/admin',
    component: AdminProductsView,
  },
  {
    path: '/admin/products',
    component: AdminProductsView,
  },
  {
    path: '/admin/products/:id',
    component: AdminProductView,
  },
  {
    path: '/admin/sections',
    component: AdminSectionsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router