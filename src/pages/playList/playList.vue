<template>
  <listBanner></listBanner>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import listBanner from '@/components/playList/listBanner.vue'
import Request_ from '@/request/index'
onBeforeMount(() => {
  getCatlist()
})
const getCatlist = () => {
  return Request_.catlist().then(res => {
    console.log('歌单结果', res)
  })
}
</script>

<style lang="scss" scoped>

</style>
