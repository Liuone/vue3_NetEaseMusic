// 导入axios请求
import axios from 'axios'
// 封装axios请求
export const axiosRequest = params => {
  return axios({
    method: params.method || 'post',
    url: params.url,
    _t: Date.parse(new Date()) / 1000, // 发送post带时间戳
    data: {
      ...params.data
    }
  }).then(res => {
    console.log('请求到的初步结果>>>', res)
    // eslint-disable-next-line no-unused-vars
    const { code } = res.data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
    console.log(code)
    if (code === 200) {
      return Promise.resolve(res.data.banners)
    } else {
      return Promise.reject(res.data)
    }
  })
}
// 抛出方法
export const Request_ = params => axiosRequest(params)
