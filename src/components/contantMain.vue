<template>
  <div v-if="clickRecommend">
    <!--  轮播图-->
    <div class="main-top-img">
      <el-carousel :interval="3000" type="card" trigger="click" indicator-position="" height="200px">
        <el-carousel-item v-for="item in bannerData" :key="item">
          <img class="medium" :src="item.imageUrl">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--    推荐歌单模块-->
    <div class="recommend" @click="clickRecommendStatus">
      <h3 >推荐歌单</h3>
    </div>
  </div>
<!--  推荐歌单-->
  <div v-else>
    <recommend-music @handle="handle"/>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount } from 'vue'
import Request_ from '@/request/index'
// 导入组件
import recommendMusic from '@/components/contant/recommendMusic'

export default {
  name: 'contantMain',
  components: {
    recommendMusic
  },
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
    // 推荐歌单跳转状态
    const clickRecommend = ref(true)
    const clickRecommendStatus = () => {
      clickRecommend.value = false
      console.log(clickRecommend)
    }
    const handle = (value) => {
      clickRecommend.value = value
    }
    // 返回
    return {
      bannerData,
      banner,
      clickRecommend,
      clickRecommendStatus,
      handle
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

.recommend {
  text-align: left;

  h3 {
    font-weight: bold;
  }
}
</style>
