import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main'
import recommend from '@/pages/recommend.vue'
import playList from '@/pages/playList/playList.vue'
import highQuality from '@/pages/playList/highQuality.vue'
import highQualityDetail from '@/pages/playList/highQualityDetail.vue'
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
      },
      // 歌单
      {
        path: '/playList',
        name: 'playList',
        components: {
          playList
        }
      },
      // 精品歌单
      {
        path: '/playList/highQuality/',
        name: 'highQuality',
        components: {
          highQuality
        }
      },
      {
        path: '/playList/highQuality/detail',
        name: 'highQualityDetail',
        components: {
          highQualityDetail
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
