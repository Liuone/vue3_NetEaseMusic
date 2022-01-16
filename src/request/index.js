import { Request_ } from '@/libs/request'
import { API } from '@/libs/api.js'

export default {
  // 获取轮播图
  banner () {
    return Request_({
      url: API.banner
    })
  },
  // 邮箱登录
  emailLogin (data) {
    return Request_({
      url: API.emailLogin,
      data
    })
  },
  refresh () {
    return Request_({
      url: API.refresh
    })
  }
}
