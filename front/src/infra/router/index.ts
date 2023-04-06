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
            name: 'knights',
            component: () => import('../../presentation/views/ListKnights.vue'),
        },
        {
            path: '/heroes',
            name: 'heroes',
            component: () => import('../../presentation/views/ListHeroes.vue'),
        },
        {
            path: '/knights/create',
            name: 'knights-create',
            component: () => import('../../presentation/views/Create.vue'),
        },
    ]
})

export default router
