import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    name: 'page404',
    component: () => import('@/views/error/404'),
  },
]

console.log(process.env.BASE_URL); // 这时还拿不到 .env.production里的变量
const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV==='development'?'/':'/web-exam/',
  routes
})

export default router
