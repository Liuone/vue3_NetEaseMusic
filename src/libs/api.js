export const API = {
  // 登录接口(有3个)
  // 1. 手机登录
  phoneLogin: `${process.env.VUE_APP_BASE_API_URL}/login/cellphone`,

  // 2. 邮箱登录
  emailLogin: `${process.env.VUE_APP_BASE_API_URL}/login`,

  // 3.二维码登录
  /**
   * 说明: 二维码登录涉及到3个接口,调用务必带上时间戳,防止缓存
   **/
  // (1) 二维码key生成接口
  qrkey: `${process.env.VUE_APP_BASE_API_URL}/login/qr/key`,
  // (2) 二维码生成接口
  /**
   * 说明: 调用此接口传入上一个接口生成的key可生成二维码图片的base64和二维码信息,可使用base64展示图片,或者使用二维码信息内容自行使用第三方二维码生成库渲染二维码
   */
  qrcreate: `${process.env.VUE_APP_BASE_API_URL}/login/qr/create`,
  // (3)  二维码检测扫码状态接口
  /**
   * 说明: 轮询此接口可获取二维码扫码状态,800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
   */
  qrcheck: `${process.env.VUE_APP_BASE_API_URL}/login/qr/login/qr/check`,

  // 刷新登录
  refresh: `${process.env.VUE_APP_BASE_API_URL}/login/refresh`,

  // 推荐歌单
  personalized: `${process.env.VUE_APP_BASE_API_URL}/personalized`,

  // 轮播图
  banner: `${process.env.VUE_APP_BASE_API_URL}/banner`,

  // 登陆状态
  status: `${process.env.VUE_APP_BASE_API_URL}/login/status`,

  /*
  歌单
   */
  // 歌单分类
  catlist: `${process.env.VUE_APP_BASE_API_URL}/playlist/catlist`,

  // 热门歌单分类
  hot: `${process.env.VUE_APP_BASE_API_URL}/playlist/hot`,

  // 歌单 ( 网友精选碟 )
  playlist: `${process.env.VUE_APP_BASE_API_URL}/top/playlist`,

  // 精品歌单标签列表
  tags: `${process.env.VUE_APP_BASE_API_URL}/playlist/highquality/tags`,

  // 获取精品歌单
  highquality: `${process.env.VUE_APP_BASE_API_URL}/top/playlist/highquality`
}
