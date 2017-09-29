import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Terms from '@/components/Terms'
import Story from '@/components/Story'

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
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
