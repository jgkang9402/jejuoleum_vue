<template>
  <div class="slide-parent">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, idx) in copyData"
        :key="idx"
        class="swiper-inner-box"
      >
        <h3>{{ item.oleumKname }}</h3>
        <img :src="item.imgPath" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MainSwiper",
  data() {
    return {
      copyData: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    result: Array,
    copied: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    preveOn() {},
  },
  mounted() {
    this.copyData = this.result.slice(0, 5);
  },
};
</script>

<style lang="scss" scoped>
.slide-parent {
  /* border: 1px solid red; */
  overflow: hidden;
  width: 60vw;
  height: auto;
  max-height: 80vh;
  /* border: 1px solid blue; */
  position: relative;
  .swiper {
    /* border: 1px solid red; */
    width: 80%;
    .swiper-inner-box {
      .swiper-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
