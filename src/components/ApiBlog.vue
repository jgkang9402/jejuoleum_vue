<template>
  <div class="slide-parent">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, idx) in postData"
        :key="idx"
        class="swiper-inner-box"
      >
        <a :href="item.doc_url" target="_blank"
          ><img :src="item.thumbnail_url" class="swiper-img"
        /></a>
        <h3 class="site_name">{{ item.display_sitename }}</h3>
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

import axios from "axios";
/* 
  데이터형태
  "collection": "blog",
  "datetime": "2017-03-15T11:57:33.000+09:00",
  "display_sitename": "Daum블로그",
  "doc_url": "http://blog.daum.net/implantkim/6081",
  "image_url": "http://static.hubzum.zumst.com/hubzum/2017/02/28/11/a94cf9a9183144718396e3779ab57c51_780x0c.jpg",
  "thumbnail_url": "https://search4.kakaocdn.net/argon/130x130_85_c/4AfaQFfZLnI",
  "width": 780
  "height": 520,
*/
export default {
  data() {
    return {
      postData: [],
      swiperOption: {
        slidesPerView: 6,
        slidesPerGroup:6,
        speed:1000,
        spaceBetween: 10,
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
  components: {
    Swiper,
    SwiperSlide,
  },

  async mounted() {
    const res = await axios
      .get("https://dapi.kakao.com/v2/search/image?query=제주도오름&page=3", {
        headers: {
          Authorization: "KakaoAK 9173e5018bddb55e391345d1bb60f255",
        },
      })
      // .get("https://dapi.kakao.com/v2/search/web")
      .then((response) => {
        // console.log(response);
        // console.log(response.data.documents);

        this.postData = response.data.documents.splice(0, 36);
        console.log(this.postData);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>
.slide-parent {
  border: 1px solid red;
  overflow: hidden;
  /* width: 60vw; */
  height: auto;
  /* border: 1px solid blue; */
  position: relative;
  .swiper {
    /* border: 1px solid red; */
    /* width: 80%; */
    .swiper-inner-box {
      /* border: 1px solid red; */
      cursor: pointer;
      .swiper-img {
        width: 100%;
        height: 100%;
      }
      .site_name {
        position: absolute;
      }
    }
    .swiper-inner-box:hover .site_name {
      width: 100%;
      top: 0;
      text-align: center;
      background-color: greenyellow;
    }
  }
}
</style>
