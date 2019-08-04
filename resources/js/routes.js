import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('./Views/Products/List.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: ()=> import('./Views/Auth/Login.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: ()=> import('./Views/Auth/register.vue')
        },
    ]
})
export default router