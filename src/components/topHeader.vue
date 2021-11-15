<template>
  <div class="left"></div>
  <div class="contant-text">
    <span>个性推荐</span>
    <span>歌单</span>
    <span>主播电台</span>
    <span>排行榜</span>
    <span>歌手</span>
    <span>最新音乐</span>
  </div>
  <div class="search"></div>
</template>

<script>
export default {
  name: 'topHeader'
}
</script>

<style lang="scss" scoped>
.contant-text {
  color: #646464;
  span:hover {
    color: #000;
    font-weight: bold;
  }
}
span {
  margin-right: 10px;
}
</style>
