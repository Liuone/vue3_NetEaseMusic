<template>
  <router-link :to="{name: 'highQuality', params: {highData: JSON.stringify(highData)}}">
    <div class="banner" :style="{backgroundImage: 'url(' + coverImg + ' )'}" @click="goToHighQuality">
      <div class="mask"></div>
      <img :src=coverImg alt="" class="banner-cover">
      <button class="banner-button">精品歌单</button>
      <span class="banner-name">{{bannerName}}</span>
    </div>
  </router-link>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from 'vue'
import Request_ from '@/request/index'
const highData = reactive([])
const coverImg = ref('')
const bannerName = ref('')
onBeforeMount(async () => {
  await getHighquality()
  coverImg.value = highData[0].coverImgUrl
  bannerName.value = highData[0].name
})
const getHighquality = () => {
  return Request_.highquality({ limit: 20, before: '' }).then(res => {
    console.log('精品', res)
    highData.push(...res.playlists)
  }).catch(err => {
    console.log('err', err)
  })
}
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  width: 1000px;
  height: 170px;
  z-index: 1;
  text-align: left;
  background-position: center;
  .banner-cover {
    border-radius: 7px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    height: 150px;
    margin-left: 20px;
    overflow: hidden;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    backdrop-filter: blur(50px);
  }
  .banner-button, .banner-name {
    position: absolute;
    left: 180px;
    font-weight: bold;
  }
  .banner-button {
    color: #dda75a;
    top: 20%;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: 1.5px solid #dda75a;
    background: rgba(0,0,0,0);
  }
  .banner-name {
    color: #ffffff;
    top: 50%;
  }
}

</style>
