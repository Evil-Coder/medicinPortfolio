import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Apps from "../views/Apps"
import Testimonials from "../views/Testimonials"
import FindDoctor from "../views/FindDoctor"
import NotFound from "@/views/NotFound";



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find a doctor',
    component: FindDoctor
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Apps
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/about',
    name: 'About us',
    component: About
  },
  {
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
