import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import ApuestaMaestro from '../components/ApuestaMaestro'
import ApuestaDetalle from '../components/ApuestaDetalle'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ApuestaMaestro',
      name: 'ApuestaMaestro',
      component: ApuestaMaestro
    },
    {
      path: '/ApuestaDetalle',
      name: 'ApuestaDetalle',
      component: ApuestaDetalle
    }
  ]
})
