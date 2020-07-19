import Vue from 'vue'
import Router from 'vue-router'

import Contactanos from './components/Informativo/Contactanos';
import Directorio from './components/Informativo/Directorio'
import AcercaDe from './components/Informativo/AcercaDe'
import Inicio from './components/Inicio'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/AcercaDe',
            name: 'acercade',
            component: AcercaDe
        },
        {
            path: '/Contactanos',
            name: 'contactanos',
            component: Contactanos
        },
        {
            path: '/Directorio',
            name: 'directorio',
            component: Directorio
        },
        {
            path: '/',
            name: 'inicio',
            component:Inicio
        },
        /*{
            path: '/Test',
            name: 'test',
            component: require('./components/Informativo/Test')
        },*/
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
})