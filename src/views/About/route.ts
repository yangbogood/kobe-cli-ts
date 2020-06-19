import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig>=[
  {
    path: '/about',
    name: 'about',
    component:()=>import('./About.vue')
   }
]

export default routes;