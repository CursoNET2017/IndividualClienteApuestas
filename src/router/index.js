import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import ApuestaMaestro from '../components/ApuestaMaestro'

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
    }
  ]
})
