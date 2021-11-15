<template>
  <el-container>
<!--    头部banner-->
    <el-header>
      <topHeader/>
    </el-header>
    <el-container>
<!--      侧边栏区域-->
      <el-aside width="200px">
        <aside-left/>
      </el-aside>
      <el-main>
<!--        主体区域-->
        <contant-main/>
      </el-main>
    </el-container>
<!--    底部播放区域-->
    <el-footer>
      <footer-box/>
    </el-footer>
  </el-container>
</template>

<script>
import topHeader from '@/components/topHeader'
import asideLeft from '@/components/asideLeft'
import contantMain from '@/components/contantMain'
import footerBox from '@/components/footerBox'
export default {
  name: 'Main',
  components: {
    topHeader,
    asideLeft,
    contantMain,
    footerBox
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #f9f9f9;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ededed;
  color: var(--el-text-color-primary);
}

.el-main {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
//底部播放栏
.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: pink;
}
</style>
