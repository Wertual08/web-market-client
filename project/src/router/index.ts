import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Container from '../views/Container.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Container',
    component: Container
  },
  {
    path: '/product',
    name: 'Container2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Container2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
