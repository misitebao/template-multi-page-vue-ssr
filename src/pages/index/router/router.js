// import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from "@/components/indexPage/Index.vue";

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: Index
    }
    ]
})