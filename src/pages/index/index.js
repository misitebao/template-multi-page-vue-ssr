/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 首页脚本
 */

import Vue from "vue";
import router from './router/router.js'
import store from './store/store.js'
import "../../assets/stylus/index.stylus"

import Index from '../../components/indexPage/Index.vue';

// 环境变量
console.log(RUN_ENV)


new Vue({
    store,
    router,
    data: {
        title: '首页'
    },
    mounted() {
    },
    components: {
    },
    render: (h) => h(Index),
}).$mount("#app");