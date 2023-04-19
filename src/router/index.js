import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', redirect: '/syllabus'
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty', auth: false},
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'empty', auth: false},
            component: () => import('../views/Register.vue')
        },
        {
            path: '/syllabus',
            name: 'syllabus',
            meta: {layout: 'main', auth: false},
            component: () => import('../views/Syllabus.vue')
        },
        {
            path: '/lecture',
            name: 'lecture',
            meta: {layout: 'main'},
            component: () => import('../views/Lecture.vue')
        },
        {
            path: '/slide',
            name: 'slide',
            meta: {layout: 'main', auth: true},
            component: () => import('../views/Slide.vue')
        },
        {
            path: '/home-work',
            name: 'home-work',
            meta: {layout: 'main', auth: false},
            component: () => import('../views/HomeWork.vue')
        },
        {
            path: '/home-work/:id',
            name: 'home-work-by-id',
            meta: {layout: 'main', auth: false},
            component: () => import('../views/HomeWork.vue')
        },
        {
            path: '/author',
            name: 'author',
            meta: {layout: 'main', auth: true},
            component: () => import('../views/Author.vue')
        },
        {
            path: '/practice',
            name: 'practice',
            meta: {layout: 'main', auth: true},
            component: () => import('../views/Practice.vue')
        },
        {
            path: '/multimedia',
            name: 'multimedia',
            meta: {layout: 'main', auth: true},
            component: () => import('../views/Мultimedia.vue')
        },
        {
            path: '/books',
            name: 'books',
            meta: {layout: 'main', auth: false},
            component: () => import('../views/Books.vue')
        },
        {
            path: '/additional-resources',
            name: 'additional-resources',
            meta: {layout: 'main', auth: false},
            component: () => import('../views/Additional-resources.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('user')
    const requireAuth = to.matched.some(record => record.meta?.auth)
    if (!token && requireAuth) {
        next({name: 'login'})
    } else {
        next()
    }
})
export default router
