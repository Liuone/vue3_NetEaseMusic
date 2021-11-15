<template>
  <!--  推荐歌单-->
  <h1 @click="test">1</h1>
</template>
<script>
export default {
  name: 'recommendMusic',
  setup (props, context) {
    const test = () => {
      context.emit('handle', true)
    }
    return {
      test
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
