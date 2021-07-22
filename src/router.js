import Vue from 'vue'
import Router from 'vue-router'
import {LoginRoutes} from './features/login/routes'
import {BoardRoutes} from './features/boards/routes'
import Login from './features/login/components/Login'

Vue.use(Router)

export const routes = [
    {
        path: '/',
        component: Login
    },
    ...LoginRoutes,
    ...BoardRoutes
]

const router = new Router({
    mode: 'history',
    routes
})

export default router
