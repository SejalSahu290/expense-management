import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddExpense from '@/views/AddExpense.vue'
import LoginView from '@/views/LoginView.vue'
import EditExpense from '@/views/EditExpense.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add-expense',
    name: 'add-expense',
    component: AddExpense 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView 
  },
  {
    path: '/edit-expense/:id',
    name: 'edit-expense',
    component: EditExpense 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
