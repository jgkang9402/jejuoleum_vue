<!-- <template>
  <Swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script> -->

<template>
  <div class="slide-parent">
    <ul>
      <li v-for="(item, idx) in copyData" :key="idx" ref="list">
        <img :src="item.imgPath" />
      </li>
      <button class="prev" ref="btn">◀</button>
      <button class="next">▶</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainSwiper",
  data() {
    return {
      copyData: [],
    };
  },
  props: {
    result: Array,
    copied: Array,
  },
  methods:{
    preveOn(){

    }
  },
  mounted() {
    // console.log(this.result.slice(0, 10));
    this.copyData = this.result.slice(1, 5);
    console.log(this.$refs.btn);
  },
};
</script>

<style scoped>
.slide-parent {
  width: 100vw;
  height: 81vh;
  /* border: 1px solid blue; */
  position: relative;
}
ul {
  border: 1px solid red;
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  /* display: flex; */
  position: relative;
  /* float: left; */
  overflow: hidden;
  white-space: nowrap;
}
li {
  display: inline-block;
  border: 1px solid #000;
  position: relative;
  width: 100%;
  height: 100%;
  color: aqua;
  /* display: none; */
}
li img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.prev,
.next {
  position: absolute;
  top: 50%;
}
.prev {
  left: 10%;
}
.next {
  right: 10%;
}
.on {
  display: block;
}
</style>
