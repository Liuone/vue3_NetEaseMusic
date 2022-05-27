// 引入消息提示
import { ElMessage } from 'element-plus'

export function ElMessageShow (message, type) {
  ElMessage({
    message: message,
    type: type
  })
}
