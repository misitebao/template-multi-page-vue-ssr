/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 首页脚本
 */

import Vue from "vue/dist/vue.js";
import "../../assets/stylus/index.stylus"

import Demo from '../../components/public/Demo.vue';

console.log(RUN_ENV)


new Vue({
    data: {
        title: '首页'
    },
    mounted() {
        console.log('monuted!')
    },
    components: {
        Demo
    },

    // render: (h) => h(Demo),
}).$mount("#app");