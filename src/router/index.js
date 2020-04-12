import Vue from 'vue'
import VueHead from 'vue-head'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Berita'
import Terkini from '@/components/Terkini'
import Content from '@/components/Content'
import Tips from '@/components/Tips'
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
    },
    {
      path: '/berita',
      name: 'Berita',
      component: Test,
      meta: {
        title: 'COVID-19 #DiRumahAJa',
        metaTags: [
          {
            name: 'dicoding:email',
            content: 'rafliramdhn@gmail.com'
          },
          {
            name: 'description',
            content: 'Informasi Data dan Berita seputar COVID-19'
          }
        ]
      }
    },
    {
      path: '/berita/terkini/:id',
      name: 'Terkini',
      component: Terkini,
      meta: {
        title: 'COVID-19 #DiRumahAJa',
        metaTags: [
          {
            name: 'dicoding:email',
            content: 'rafliramdhn@gmail.com'
          },
          {
            name: 'description',
            content: 'Informasi Data dan Berita seputar COVID-19'
          }
        ]
      }
    },
    {
      path: '/berita/tips/:id',
      name: 'tips',
      component: Tips,
      meta: {
        title: 'COVID-19 #DiRumahAJa',
        metaTags: [
          {
            name: 'dicoding:email',
            content: 'rafliramdhn@gmail.com'
          },
          {
            name: 'description',
            content: 'Informasi Data dan Berita seputar COVID-19'
          }
        ]
      }
    },
    {
      path: '/berita/terkini/content/:q/:id',
      name: 'Content',
      component: Content,
      meta: {
        title: 'COVID-19 #DiRumahAJa',
        metaTags: [
          {
            name: 'dicoding:email',
            content: 'rafliramdhn@gmail.com'
          },
          {
            name: 'description',
            content: 'Informasi Data dan Berita seputar COVID-19'
          }
        ]
      }
    }
  ]
})
