<template>
  <el-container>
    <el-header>
      <topHeader/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-left/>
      </el-aside>
      <el-main>
        <contant-main/>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import topHeader from '@/components/topHeader'
import asideLeft from '@/components/asideLeft'
import contantMain from '@/components/contantMain'
export default {
  name: 'Main',
  components: {
    topHeader,
    asideLeft,
    contantMain
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
</style>
