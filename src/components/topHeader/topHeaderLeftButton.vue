<template>
  <div class="button-style">
    <button class="back-button" @click="goBack">&lt;</button>
    <button class="go-button" @click="goTo">&gt;</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
const goTo = () => {
  router.go(1)
}
</script>

<style lang="scss" scoped>
  .button-style {
    flex: 1;
    .back-button, .go-button{
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background-color: rgba(0,0,0,0);
    }
  }
  .back-button:hover, .go-button:hover {
    background-color: #e9e9e9;
  }
</style>
