import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Polices from '@/components/Polices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/polices',
      name: 'polices',
      component: Polices
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
