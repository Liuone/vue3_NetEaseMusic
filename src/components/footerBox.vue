<template>
  <el-row justify="space-around">
    <!--    歌曲部分-->
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="grid-content bg-purple">1</div>
    </el-col>
    <!--    播放部分-->
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="grid-content bg-purple-light play">
        <img :src="up" alt="" class="up">
        <img :src="play" alt="" class="playbutton">
        <img :src="down" alt="" class="down">
      </div>
    </el-col>
    <!--    杂项-->
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="grid-content bg-purple">3</div>
    </el-col>
  </el-row>
</template>

<script>
// 导入播放组件图标
import up from '@/assets/images/up.png'
import play from '@/assets/images/play.png'
import down from '@/assets/images/down.png'
export default {
  name: 'footer',
  setup () {
    return {
      play,
      up,
      down
    }
  }
}
</script>

<style lang="scss" scoped>
//播放组件
.play {
  .up,
  .down {
    width: 35px;
  }
  .playbutton {
    width: 45px;
  }
}
.el-col {
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
