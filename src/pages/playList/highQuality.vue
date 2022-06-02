<template>
    <div class="title">精品歌单</div>
  <router-link :to="{name: 'highQualityDetail'}">
  <ul class="music-intro" >
    <li class="music-intro-li" v-for="item in detailedHighQuality" :key="item.id">
      <div style='position: relative'>
      <img :src="item.coverImgUrl" alt="" class="music-cover">
      <span class="amount-play">{{item.playCount}}</span>
      </div>
     <div class="music-intro-text">
       <p class="music-name">{{item.name}}</p>
       <p class="music-author">by  {{item.creator.nickname}}</p>
       <p class="music-tag">{{item.tag}}</p>
     </div>
    </li>
  </ul>
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const router = useRoute()
const detailedHighQuality = ref([])
detailedHighQuality.value = JSON.parse(router.params.highData)
console.log('接过来的精品歌单内容', JSON.parse(router.params.highData))
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
  color: #000000;
  font-weight: 500;
}
.music-intro {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: left;
  .music-intro-li {
    display: flex;
    flex-direction: row;
    margin-right: 10px;
    margin-bottom: 10px;
    .amount-play {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 12px;
      color: #ffffff;
    }
    .music-intro-text {
      width: 220px;
      position: relative;
      margin-left: 10px;
      .music-name {
        width: 100%;
        position: absolute;
        top: 20%;
        font-size: 15px;
        font-weight: 500;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space: nowrap;
      }
      .music-author {
        position: absolute;
        top: 50%;
        font-size: 12px;
        color: #666666;
      }
      .music-tag {
        border: 1px solid #d13c37;
        position: absolute;
        bottom: 10%;
        font-size: 10px;
        color: #d13c37;
      }
    }
  }
  .music-cover {
    border-radius: 3px;
    width: 135px;
    height: 135px;
  }
}
</style>
