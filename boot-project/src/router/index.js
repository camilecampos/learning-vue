import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Crime from '@/components/Crime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/crime',
      name: 'Crime',
      component: Crime
    }
  ]
})
