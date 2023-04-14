import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/syllabus'
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
      path: '/home-work/:id',
      name: 'home-work-by-id',
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
     {
      path: '/additional-resources',
      name: 'additional-resources',
      component: () => import('../views/Additional-resources.vue')
    },
  ]
})

export default router
