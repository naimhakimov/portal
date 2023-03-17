import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/syllabus',
      name: 'syllabus',
      component: () => import('../views/Syllabus.vue')
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: () => import('../views/Lecture.vue')
    },
    {
      path: '/slide',
      name: 'slide',
      component: () => import('../views/Slide.vue')
    },
    {
      path: '/home-work',
      name: 'home-work',
      component: () => import('../views/HomeWork.vue')
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../views/Author.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../views/Practice.vue')
    },
    {
      path: '/multimedia',
      name: 'multimedia',
      component: () => import('../views/Мultimedia.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/Books.vue')
    },
  ]
})

export default router
