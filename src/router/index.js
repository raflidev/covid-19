import Vue from 'vue'
import VueHead from 'vue-head'
import Router from 'vue-router'
import Home from '@/components/Home'
Vue.use(VueHead)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      head: {
        title: {
          inner: 'COVID-19 #DiRumahAJa'
        },
        meta: [
          {
            name: 'dicoding:email',
            content: 'rafliramdhn@gmail.com'
          },
          {
            name: 'description',
            content: 'Informasi Data dan Berita seputar COVID-19',
            id: 'desc'
          }
        ]
      }
    }
  ]
})
