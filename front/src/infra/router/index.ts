import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/presentation/views/HomeView.vue'
import List from "@/presentation/views/List.vue";
import Create from "@/presentation/views/Create.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            // name: 'home',
            // component: HomeView
            component: () => import('../../presentation/views/HomeView.vue'),
        },
        {
            path: '/knights',
            // name: 'list',
            // component: List
            component: () => import('../../presentation/views/List.vue'),
        },
        {
            path: '/knights/create',
            // name: 'home',
            // component: Create
            component: () => import('../../presentation/views/Create.vue'),
        },
    ]
})

export default router
