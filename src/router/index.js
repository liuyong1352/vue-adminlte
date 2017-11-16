import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starter from '@/components/starter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'starter',
      component: starter
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
