<template>
  <!--  头像-->
  <el-avatar :size="50" :src="state.circleUrl"></el-avatar>
  <!--  登录-->
  <span class="login-text" @click="goToLogin">{{state.defaultName}}</span>
  <img class="triangle-style" :src="triangle" v-if="Object.keys(userInfo).length === 0 ?  false :  true">
  <!--    登录框-->
  <el-dialog v-model="state.dialogFormVisible" title="登录" width="30%">
    <!--      账号-->
    邮箱:
    <el-input v-model="login.emailLogin" placeholder="请输入邮箱"/>
    <!--      密码-->
    密码:
    <el-input v-model="login.password" placeholder="请输入密码" show-password/>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelLogin">取消</el-button>
        <el-button type="danger" @click="confirmLogin">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, onBeforeMount } from 'vue'
// 引入消息提示
import { ElMessageShow } from '@/libs/utils.js'
import Request_ from '@/request/index'
onBeforeMount(() => {
  console.log('userInfo', userInfo)
})
// 定义
let userInfo = reactive({})
const triangle = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATpJREFUaEPt2U8KgkAUx/F57sXLeAAHTxO66QRBh2gX1DUC7xF0j6CNhtGiVeib3/szlAcY58PwFZ9SyPyizPcffgMwDMOmqqpzXdd3bye26ARmQFEU23Ec+7ZtL54QawCHeeNEtG+aZucFsRrw3vgQQuhjjFdrCBcQpml6EFEXYzxaItiAj02fyrLsrAJHAGbLzSpwFOB1IBaBQwEWgUsAVAMXAWgGLg0QD1wDIBq4GkAqcG0APHB1ADpwSwAkcGtAcuAuACmBewKwAncF4AT+ByCnMc6U5+kEWHO2C0DKIGQNSB5FLQGQjwHqAE6o3x4U2gBWqC4AKaFaA5JDtQRAQlUHoEPVBsBDVQNIhaoBEA1VGiAeqghAM1QJgGqoUIBFqChA3r9Zs/7RjZx70Wstep1G3xS5XvaAJ3qcIEBvF8GYAAAAAElFTkSuQmCC'
// 登录
const login = reactive({
  emailLogin: '',
  password: ''
})
const state = reactive({
  defaultName: '还没有登录',
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', // 头像地址
  dialogFormVisible: false // 登录框 默认关闭 点击的时候显示
})
// 方法
const goToLogin = () => {
  Object.keys(userInfo).length !== 0 ? state.dialogFormVisible = false : state.dialogFormVisible = true
}
// 取消登录
const cancelLogin = () => {
  state.dialogFormVisible = false
  ElMessageShow('您已取消登录', 'warning')
  console.log('取消登录')
}
// 登录确认
const confirmLogin = async () => {
  console.log('登录按钮')
  if (!login.emailLogin) {
    ElMessageShow('邮箱为空', 'warning')
    return
  } else if (!login.password) {
    ElMessageShow('密码为空', 'warning')
    return
  }
  try {
    await Request_.emailLogin({
      email: login.emailLogin,
      password: login.password
    }).then(res => {
      console.log('这是捕获到的正确信息>>>', res)
      if (res.code === 200) {
        ElMessageShow('登陆成功', 'success')
        userInfo = res
        getUserInfo()
        state.dialogFormVisible = false
      }
    })
  } catch (err) {
    console.log('错误信息>>>', err)
    ElMessageShow(err.message || err.msg, 'error')
  }

  // try {
  //   await Request_.status().then(res => {
  //     console.log('登陆状态>>>', res)
  //   })
  // } catch (err) {
  //   console.log('登录状态错误>>>', err)
  // }
}
// 获取头像，和姓名
const getUserInfo = () => {
  state.circleUrl = userInfo.profile.avatarUrl
  state.defaultName = userInfo.profile.nickname
}
</script>

<style lang="scss" scoped>
  .triangle-style {
    vertical-align: middle;
    margin-left: 10px;
    width: 10px;
  }
  .el-avatar {
    vertical-align: middle;
  }

  .login-text {
    margin-left: 15px;

  }
</style>
