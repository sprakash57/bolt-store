import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beautifier',
    name: 'Beautifier',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Beautifier.vue')
  },
  {
    path: '/compare',
    name: 'Comparator',
    component: () => import('../views/Comparator.vue')
  },
  {
    path: '/execute',
    name: 'Execute',
    component: () => import('../views/Execute.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
