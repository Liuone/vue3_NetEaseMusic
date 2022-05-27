<template>
  <div class="left"></div>
  <div class="contant-text">
    <span v-for="( item, index) in topTitle" :key="index" @click="topTitleClick(item, index)" :class="selectedTitle === index ? 'span-selected' : ''">{{item}}</span>
  </div>
  <div class="search"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const topTitle = ['个性推荐', '歌单', '主播电台', '排行榜', '歌手', '最新音乐']
const selectedTitle = ref(null)
const router = useRouter()
const topTitleClick = (item, index) => {
  selectedTitle.value = index
  switch (item) {
    case '个性推荐':
      router.push({
        path: '/recommend'
      })
      break
  }
}
// const recommendationClick = () => {
//   router.push({
//     path: '/recommend'
//   })
// }
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
  color: #000;
  margin-right: 10px;
}
  .span-selected {
    font-weight: bold;
  }
</style>
