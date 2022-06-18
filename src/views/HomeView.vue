<template>
  <div class="home-parent">
    <div>home</div>
    <MainSwiper :result="result" :copied="copied" />
  </div>
</template>

<script>
import MainSwiper from "@/components/MainSwiper.vue";
export default {
  props: {
    result: Array,
    copied: Array,
  },

  components: { MainSwiper },
};
</script>

<style></style>
