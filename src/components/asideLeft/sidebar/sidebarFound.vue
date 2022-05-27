<template>
    <ul v-for="(item, index) in found" :key="index">
      <li>{{item}}</li>
    </ul>
</template>

<script setup>
const found = ['发现音乐', '私人FM', '视频', '朋友']
</script>

<style lang="scss" scoped>
  ul {
    li {
      margin-top: 20px;
    }
  }
</style>
