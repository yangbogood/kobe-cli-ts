import { RouteConfig } from 'vue-router';


const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component:()=>import('./Home.vue')
  }
]

export default routes;
