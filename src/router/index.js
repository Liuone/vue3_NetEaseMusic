import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main'
import recommend from '@/pages/recommend.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // 个性推荐
      {
        path: '/recommend',
        name: 'recommend',
        components: {
          recommend
        }
      }
      // {
      //   path: '/recommendation',
      //   name: 'recommenDation',
      //   components: {
      //     recommenDation
      //   }
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
