import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ricky-and-morty',
    name: 'Ricky and Morty',
    component: HomeView
  },
  {
    path: '/dragonball-super',
    name: 'Dragonball Super',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
