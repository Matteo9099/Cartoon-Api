import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RickyAndMorty from '../views/RickyAndMorty.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ricky-and-morty',
    name: 'ricky-and-morty',
    component: RickyAndMorty
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
