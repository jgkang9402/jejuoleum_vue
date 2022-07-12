<template>
  <div>
    <div class="home-parent">
      <MainSwiper :result="result" :copied="copied" />
      <KakaoNews />
    </div>
    <h1>실시간 #제주오름</h1>
    <ApiBlog class="blog_slide"/>
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

<style scoped>
.home-parent {
  display: flex;
  /* max-height: 65vh; */
}
h1 {
  text-align: center;
  margin: 1rem 0 1rem 0;
  border-top: 1px dotted #000;
  border-bottom: 1px dotted #000;
}
.blog_slide{
  margin-bottom: 2rem;
}
</style>
