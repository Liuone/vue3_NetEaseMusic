<template>
  <div class="top-header-flex">
    <leftButton></leftButton>
  <div class="contant-text">
    <span v-for="( item, index) in topTitle" :key="index" @click="topTitleClick(item, index)" :class="selectedTitle === index ? 'span-selected' : ''">{{item}}</span>
  </div>
  <div class="search"></div>
  </div>
</template>

<script setup>
import leftButton from '@/components/topHeader/topHeaderLeftButton.vue'
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
    case '歌单':
      router.push({
        path: '/playList'
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
  .top-header-flex {
    display: flex;
    .contant-text {
      flex: 2;
      color: #646464;
      span:hover {
        color: #000;
        font-weight: bold;
      }
    }
    .search {
      flex: 1;
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
