import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main'
import recommenDation from '@/components/recommend/recommenDation.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // 个性推荐
      {
        path: '/recommendation',
        name: 'recommenDation',
        components: {
          recommenDation
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
