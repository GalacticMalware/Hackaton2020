

require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify/'
import Routers from './Route'
import Chart from 'chart.js';

Vue.use(Vuetify)

import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    components:App,
    router: Routers,
    render: h => h(App),
});

export default app;