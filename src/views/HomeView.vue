<template>
  <div>
    <div class="home-parent">
      <MainSwiper :result="result" :copied="copied" />
      <KakaoNews />
    </div>
    <h1>실시간 #제주오름</h1>
    <ApiBlog/>
  </div>
</template>

<script>
import MainSwiper from "@/components/MainSwiper.vue";
import KakaoNews from "@/components/KakaoNews.vue";
import ApiBlog from "@/components/ApiBlog.vue";
export default {
  props: {
    result: Array,
    copied: Array,
  },

  components: { MainSwiper, KakaoNews, ApiBlog },
};
</script>

<style>
.home-parent {
  display: flex;
  /* max-height: 65vh; */
}
</style>
