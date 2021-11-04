<template>
  <el-container>
    <el-header>
      <topHeader/>
    </el-header>
    <el-container>
      <el-aside width="150px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import topHeader from '@/components/topHeader'
export default {
  name: 'Main',
  components: {
    topHeader
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
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
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
