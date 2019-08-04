/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify'

import Routes from '@/js/routes';

import App from '@/js/Views/App.vue';
import store from './store'


Vue.use(Vuetify);

new Vue({
    el:'#app',
    router: Routes,
    store,
    render: h=> h(App)
}).$mount('#app');
// const app = new Vue({
//     el:'#app',
//     router: Routes,
//     render: h=> h(App)
// });

// export default app;
