<template>
  <div class="news-parent">
    <ul>
      <li v-for="(item, idx) in newsData" :key="idx" class="item">
        <div class="contents">{{ item.contents }}</div>
        <!-- <div>{{item.datetime}}</div> -->
        <!-- <div>{{item.title}}</div> -->
        <!-- <div>{{item.url}}</div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
/* 
  "contents": "<b>제주도</b><b>오름</b>368 코난드론으로 담기 닮기 25번째 <b>오름</b>무더기 ~ 새미<b>오름</b> 안돌<b>오름</b> 체<b>오름</b> 밧돌<b>오름</b> <b>오름</b>과 친해지고 싶다면~ 예로부터 안돌 <b>오름</b>[안똘로롬]이라 불렀으며 한자 차용 표기에 따라 외석악(外石岳...",
  "datetime": "2016-03-13T09:24:37.000+09:00",
  "title": "<b>제주도</b><b>오름</b>368 코난드론으로 담기 닮기 25번째 안돌<b>오름</b>",
  "url": "https://www.vingle.net/posts/1467661"
*/

export default {
  data() {
    return {
      newsData: [],
    };
  },
  async mounted() {
    const res = await axios
      .get("https://dapi.kakao.com/v2/search/web?query=제주도오름&page=2", {
        headers: {
          Authorization: "KakaoAK 9173e5018bddb55e391345d1bb60f255",
        },
      })
      // .get("https://dapi.kakao.com/v2/search/web")
      .then((response) => {
        // console.log(response.data.documents);
        this.newsData = response.data.documents;
        console.log(this.newsData);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>
.news-parent {
  border: 1px solid greenyellow;
  width: 40vw;
  overflow: hidden;
  height: 50vh;
  .item {
    width: auto;
    height: 10%;
    .contents {
      height: 100%;
    }
  }
}
</style>
