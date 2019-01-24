/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import makeTask from '@/components/make-task'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/make',
      name: 'makeTask',
      component: makeTask
    }
  ]
})
