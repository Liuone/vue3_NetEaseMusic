<template>
  <div class="aside-top">
    <avatar></avatar>
  </div>
  <div class="aside-contant">
    <sidebarFound></sidebarFound>
  </div>
</template>

<script setup>
import avatar from '@/components/asideLeft/avatar/avatar.vue'
import sidebarFound from '@/components/asideLeft/sidebar/sidebarFound.vue'
</script>

<style lang="scss" scoped>

.aside-top {
  padding: 10px 0 0 10px;
}

.aside-contant {
  padding: 10px 0 0 20px;
}
</style>
