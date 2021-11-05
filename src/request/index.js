import { Request_ } from '@/libs/request'
import { API } from '@/libs/api.js'

export default {
  // 获取轮播图
  banner () {
    return Request_({
      url: API.banner
    })
  }
}
