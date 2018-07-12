import Vue from 'vue';
import App from './components/App.vue';

window.onload = function() {
    new Vue({
        el: '#app',
        template: '<app></app>',
        components: { App }
    })
}