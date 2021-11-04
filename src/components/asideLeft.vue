<template>
  <div class="aside-top">
    <!--  头像-->
    <el-avatar :size='medium' :src="state.circleUrl"></el-avatar>
    <!--  登录-->
    <span class="login-text" @click="goToLogin">还没有登录呦</span>
  </div>
  <div class="aside-contant">
    <ul>
      <li>发现音乐</li>
      <li>私人FM</li>
      <li>视频</li>
      <li>朋友</li>
      <li>朋友</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'aside',
  setup () {
    // 定义
    const state = reactive({
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    })
    // 方法
    const goToLogin = () => {
    }
    // 返回
    return {
      state,
      goToLogin
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
