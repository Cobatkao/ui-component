import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import Button from '../components/Button.vue';
import Icon from '../components/Icon.vue';
import Switch from '../components/Switch.vue';
import Loading from '../components/Loading.vue';
import Star from '../components/Star.vue';
import Scroll from '../components/Scroll.vue';

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: 'switch',
                    component: Switch
                },
                {
                    path: 'button',
                    component: Button
                },
                {
                    path: 'icon',
                    component: Icon
                },
                {
                    path: 'scroll',
                    component: Scroll
                },
                {
                    path: 'star',
                    component: Star
                },
                {
                    path: 'loading',
                    component: Loading
                }
            ]
        }
    ]
})

export default router;