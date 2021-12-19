import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main'
import Recommendation from '@/components/Recommendation'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // 个性推荐
      {
        path: '/recommendation',
        name: 'Recommendation',
        components: {
          Recommendation
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
