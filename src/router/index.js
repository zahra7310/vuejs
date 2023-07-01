import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    }, 
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }, 
    {
      path: '/feed',
      name: 'feed',
      component: ()=> import('../views/FeedView.vue')
    }, 
    {
      path: '/messages',
      name: 'messages',
      component: ()=> import('../views/MessagesView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('../views/SearchView.vue')
    },
  ]
})

export default router
