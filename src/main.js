import sum from './math'
import css from './css/index.css'
require('./css/special.less')
console.log(sum(15, 30))
import Vue from 'vue'
import app from '../src/vue/app.vue'

new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    }
})



