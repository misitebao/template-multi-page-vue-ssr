
import Vue from "vue/dist/vue.js";
import "../scss/index.scss"

new Vue({
    data: {
        title: 'index page'
    },
    mounted() {
        console.log('monuted!')
    }
}).$mount("#app");