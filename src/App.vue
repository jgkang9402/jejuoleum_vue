<template>
  <div id="app">
    <NavBarVue />
    <router-view class="page" :result="result" />
  </div>
</template>

<script>
/* 
  explan: "비고 51m의 원형 화구를 가진 오름이다.  거칠지 않은 산 체와 완만한 탐방로가 있어 여유로운 분위기의 오름이다."
  imgPath: "https://gis.jeju.go.kr/images/oleum/abu.png"
  oleumAddr: "제주시 구좌읍 송당리"
  oleumAltitu: 51
  oleumEname: "abu"
  oleumKname: "아부오름"
  x: "126.777283002793"
  y: "33.4488750035003"
  */
import axios from "axios";
import NavBarVue from "./components/NavBar.vue";
export default {
  data() {
    return {
      result: [],
    };
  },
  async mounted() {
    const res = await axios.get("/rest/JejuOleumVRImg/getOleumADetailList");
    console.log(res);
    if (res.status) {
      this.result = res.data.resultSummary;
    }
  },
  components: {
    NavBarVue,
  },
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dt,
dd,
p {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
}

a {
  color: #000;
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

i {
  font-style: normal;
}

.page {
}
</style>
