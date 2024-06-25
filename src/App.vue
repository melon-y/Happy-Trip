<template>
  <div class="app">
    <!-- <div class="tab-bar">
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/tab_home.png" alt="">
        <span class="text">首页</span>
      </div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/tab_favor.png" alt="">
        <span class="text">收藏</span>
      </div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/tab_order.png" alt="">
        <span class="text">订单</span>
      </div>
      <div class="tab-bar-item">
        <img src="./assets/img/tabbar/tab_message.png" alt="">
        <span class="text">消息</span>
      </div>
    </div> -->
    <router-view/>
    <!-- <tab-bar/> -->
    <VantTabBar/>
  </div>

</template>

<script  setup>
// import TabBar from "@/components/tab-bar/tab-bar.vue"
import VantTabBar from "@/components/tab-bar/vant-tab-bar.vue"

</script>

<style lang="less" scoped>

</style>
