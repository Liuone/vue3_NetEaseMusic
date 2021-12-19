<template>
  <div class="aside-top">
    <!--  头像-->
    <el-avatar :size="50" :src="circleUrl"></el-avatar>
    <!--  登录-->
    <span class="login-text" @click="goToLogin">还没有登录呦</span>
    <!--    登录框-->
    <el-dialog v-model="dialogFormVisible" title="登录" width="30%">
      <!--      账号-->
      邮箱:
      <el-input v-model="login" placeholder="请输入邮箱"/>
      <!--      密码-->
      密码:
      <el-input v-model="password" placeholder="请输入密码" show-password/>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelLogin">取消</el-button>
        <el-button type="danger" @click="confirmLogin">确定</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
  <div class="aside-contant">
    <ul>
      <li>发现音乐</li>
      <li>私人FM</li>
      <li>视频</li>
      <li>朋友</li>
      <li>朋友</li>
      <li>朋友</li>
      <li>朋友</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
// 引入消息提示
import { ElMessage } from 'element-plus'
export default {
  name: 'asideLeft',
  setup () {
    // 定义

    const state = reactive({
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', // 头像地址
      dialogFormVisible: false // 登录框 默认关闭 点击的时候显示
    })
    // 方法
    const goToLogin = () => {
      state.dialogFormVisible = true
    }
    // 取消登录
    const cancelLogin = () => {
      state.dialogFormVisible = false
      ElMessage({
        message: '您已取消登录.',
        type: 'warning'
      })
      console.log('取消登录')
    }
    // 邮箱登录
    const confirmLogin = () => {
      console.log('登录按钮')
    }
    // 返回
    return {
      // eslint-disable-next-line no-undef
      login: ref(''),
      password: ref(''),
      ...toRefs(state),
      goToLogin,
      cancelLogin,
      confirmLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-top {
  padding: 10px 0 0 10px;

  .el-avatar {
    vertical-align: middle;
  }

  .login-text {
    margin-left: 15px;

  }
}

.aside-contant {
  padding: 10px 0 0 20px;

  ul {
    li {
      margin-top: 20px;
    }
  }
}
</style>
