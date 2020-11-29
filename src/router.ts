import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import Button from '../components/Button.vue';
import Icon from '../components/Icon.vue';
import Switch from '../components/Switch.vue';
import Dialog from '../components/Dialog.vue';
import Tabs from '../components/Tabs.vue';
import DocHome from '../components/DocHome.vue';

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
                path: '',
                component: DocHome
              },
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
                path: 'dialog',
                component: Dialog
              },
              {
                path: 'tabs',
                component: Tabs
              }
            ]
        }
    ]
})

export default router;