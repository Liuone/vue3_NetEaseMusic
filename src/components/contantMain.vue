<template>
  <!--  轮播图-->
  <div class="main-top-img" >
    <el-carousel :interval="3000" type="card" trigger="click" indicator-position="" height="200px">
      <el-carousel-item v-for="item in bannerData" :key="item">
        <img class="medium" :src="item.imageUrl">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from 'vue'
import Request_ from '@/request/index'

export default {
  name: 'contantMain',
  setup () {
    const bannerData = reactive([])
    // mounted生命周期
    onBeforeMount(() => {
      banner()
    })
    // 请求轮播图
    const banner = () => {
      return Request_.banner({
        type: 0 // 0:pc 1:android 2:iphone 3:ipad
      }).then(res => {
        console.log('轮播图获取结果返回>>>', res)
        bannerData.push(...res)
      })
    }
    // 返回
    return {
      bannerData,
      banner
    }
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item img {
  border-radius: 10px;
  height: 200px;
  //opacity: 0.75;
  margin: 0;
  text-align: center;
}

</style>
