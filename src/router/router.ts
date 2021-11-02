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
import AdminRecordsView from '@/views/AdminRecordsView.vue'
import AdminOrderView from '@/views/AdminOrderView.vue'
import AdminPublicView from '@/views/AdminPublicView.vue'
import NewOrderView from '@/views/NewOrderView.vue'
import AcceptedOrderView from '@/views/AcceptedOrderView.vue'
import OrdersView from '@/views/OrdersView.vue'
import OrderView from '@/views/OrderView.vue'
import PromoView from '@/views/PromoView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/promo',
    component: PromoView
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
    path: '/orders/new',
    component: NewOrderView,
  },
  {
    path: '/orders/accepted',
    component: AcceptedOrderView,
  },
  {
    path: '/orders',
    component: OrdersView,
  },
  {
    path: '/orders/:id',
    component: OrderView,
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
  {
    path: '/admin/records',
    component: AdminRecordsView,
  },
  {
    path: '/admin/orders/:id',
    component: AdminOrderView,
  },
  {
    path: '/admin/public',
    component: AdminPublicView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
