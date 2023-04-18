import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/syllabus'
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty'},
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty'},
      component: () => import('../views/Register.vue')
    },
    {
      path: '/syllabus',
      name: 'syllabus',
      meta: { layout: 'main'},
      component: () => import('../views/Syllabus.vue')
    },
    {
      path: '/lecture',
      name: 'lecture',
      meta: { layout: 'main'},
      component: () => import('../views/Lecture.vue')
    },
    {
      path: '/slide',
      name: 'slide',
      meta: { layout: 'main'},
      component: () => import('../views/Slide.vue')
    },
    {
      path: '/home-work',
      name: 'home-work',
      meta: { layout: 'main'},
      component: () => import('../views/HomeWork.vue')
    },
    {
      path: '/home-work/:id',
      name: 'home-work-by-id',
      meta: { layout: 'main'},
      component: () => import('../views/HomeWork.vue')
    },
    {
      path: '/author',
      name: 'author',
      meta: { layout: 'main'},
      component: () => import('../views/Author.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      meta: { layout: 'main'},
      component: () => import('../views/Practice.vue')
    },
    {
      path: '/multimedia',
      name: 'multimedia',
      meta: { layout: 'main'},
      component: () => import('../views/Мultimedia.vue')
    },
    {
      path: '/books',
      name: 'books',
      meta: { layout: 'main'},
      component: () => import('../views/Books.vue')
    },
     {
      path: '/additional-resources',
      name: 'additional-resources',
       meta: { layout: 'main'},
      component: () => import('../views/Additional-resources.vue')
    },
  ]
})

export default router
