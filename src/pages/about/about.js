/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 关于页面脚本
 */

import Vue from "vue/dist/vue.js";
import "../../assets/stylus/index.stylus"

import Demo from '../../components/public/Demo.vue';

console.log(RUN_ENV)


new Vue({
    data: {
        title: '关于'
    },
    mounted() {
        console.log('monuted!')
    },
    components: {
        Demo
    },

    // render: (h) => h(Index),
}).$mount("#app");