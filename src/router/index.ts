import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

let routes: Array<RouteConfig> = [];

const context = require.context('../views', true, /route\.ts/);
context.keys().forEach(url => {
  const  route  = context(url).default ||context(url);
  routes = routes.concat(route);
})


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
