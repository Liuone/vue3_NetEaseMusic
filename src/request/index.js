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
    const timestamp = Date.parse(new Date())
    return Request_({
      url: API.emailLogin + '/?' + timestamp,
      data
    })
  },
  // 刷新登录
  refresh () {
    return Request_({
      method: 'GET',
      url: API.refresh
    })
  },
  // 登陆状态
  status () {
    return Request_({
      url: API.status,
      method: 'GET'
    })
  }
}
