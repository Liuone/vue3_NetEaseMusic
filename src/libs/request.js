// 导入axios请求
import axios from 'axios'
// 封装axios请求
export const axiosRequest = params => {
  return axios({
    method: params.method || 'post',
    url: params.url,
    data: {
      ...params.data
    }
  }).then(res => {
    // eslint-disable-next-line no-unused-vars
    const { resData, resCode } = res.data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
    if (resCode === '00000000' || resCode === '0000') {
      return Promise.resolve(res.data.resData)
    } else {
      return Promise.reject(res.data)
    }
  })
}
// 抛出方法
export const Request_ = params => axiosRequest(params)
