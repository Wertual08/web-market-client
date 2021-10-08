import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import MainView from "@/views/MainView.vue"
import AboutView from "@/views/AboutView.vue"
import CatalogView from "@/views/CatalogView.vue"
import CatalogProductView from '@/views/CatalogProductView.vue'
import CartView from '@/views/CartView.vue'
import AdminView from '@/views/AdminView.vue'
import AdminProductsView from '@/views/AdminProductsView.vue'
import AdminProductView from '@/views/AdminProductView.vue'
import AdminSectionsView from '@/views/AdminSectionsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/catalog',
    component: CatalogView,
    name: 'CatalogView',
    props: true,
  },
  {
    path: '/catalog/:id',
    component: CatalogProductView,
  },
  {
    path: '/cart',
    component: CartView,
  },
  {
    path: '/admin',
    component: AdminView,
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
  routes,
})

export default router
