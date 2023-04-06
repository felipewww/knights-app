import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../../presentation/views/HomeView.vue'),
        },
        {
            path: '/knights',
            component: () => import('../../presentation/views/List.vue'),
        },
        {
            path: '/knights/create',
            component: () => import('../../presentation/views/Create.vue'),
        },
    ]
})

export default router
