<template>
  <div class="vant-tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" router>
      <template v-for="(item,index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex!==index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import tabbarData from "@/assets/data/tabbar"
import { getAssetURL } from '@/utils/load_assets';
const currentIndex = ref(0);


</script>
<style scoped>
</style>