import Vue from 'vue'
import Router from 'vue-router'
import ChatVue from '@/components/ChatVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatVue',
      component: ChatVue
    }
  ]
})