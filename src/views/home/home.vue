<template>
  <div class="home">
    <HomeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearchBox/>
  </div>
</template>
<script setup>
import HomeNavBar from "@/views/home/cpns/home-nav-bar.vue"
import HomeSearchBox from "@/views/home/cpns/home-search-box.vue"
import useHomeStore from "@/stores/modules/home"

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
</script>
<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}

</style>