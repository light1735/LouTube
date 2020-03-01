import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: Router.home.path
    },
    {
        path: Router.home.path,
        name: Router.home.name,
        component: Home
    },
    {
        path: Router.collect.path,
        name: Router.collect.name,
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router