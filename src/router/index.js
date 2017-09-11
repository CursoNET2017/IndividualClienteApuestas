import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import ApuestaMaestro from '../components/ApuestaMaestro'
import ApuestaDetalle from '../components/ApuestaDetalle'
import UsuarioMaestro from '../components/UsuarioMaestro'
import UsuarioDetalle from '../components/UsuarioDetalle'

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
    },
    {
      path: '/UsuarioMaestro',
      name: 'UsuarioMaestro',
      component: UsuarioMaestro
    },
    {
      path: '/UsuarioDetalle',
      name: 'UsuarioDetalle',
      component: UsuarioDetalle
    },
    {
      path: '/UsuarioDetalle/:id',
      name: 'UsuarioDetalleId',
      component: UsuarioDetalle
    }
    
  ]
})
