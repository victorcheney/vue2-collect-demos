import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/echartmap',
    name: 'EchartMap',
    component: () =>
      import(
        /* webpackChunkName: "EchartsMap" */ '@/views/EchartsMap/index.vue'
      ),
  },
  {
    path: '/amap',
    name: 'AMap',
    component: () =>
      import(/* webpackChunkName: "AMap" */ '@/views/AMap/index.vue'),
  },
  {
    path: '/extensionamap',
    name: 'EchartsExtensionAMap',
    component: () =>
      import(
        /* webpackChunkName: "EchartsExtensionAMap" */ '@/views/EchartsExtensionAMap/index.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
