<template>
  <PulseLoader v-if="result.length == 0" :size="size" />
  <div id="app" v-else>
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
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
undefined;

export default {
  data() {
    return {
      result: [],
      size: "100px",
    };
  },
  async mounted() {
    const res = await axios
      .get("/rest/JejuOleumVRImg/getOleumADetailList")
      .then((res) => {
        this.result = res.data.resultSummary;
        if (res.status) {
          if (this.result.length != 0) {
            for (let i = 0; i <= this.result.length; i++) {
              this.result[i].oleumAltitu = i;
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
    let test = this.result;
    console.log(test);
    let a = test.slice(0,10)
    let b = test.slice(10,20)
    let c = test.slice(20,30)
    let d = test.slice(30,40)
    let e = test.slice(40,50)
    let f = test.slice(50,60)
    let g = test.slice(60,70)
    let h = test.slice(70,80)
    let i = test.slice(80,90)

    let alpha = [a,b,c,d,e,f,g,h,i]
    // let plus = a.concat(b,c)
    let plus =[]
    // plus[0]=a
    // plus[1]=b
    // plus[2]=c
    // console.log(plus);
    for(let j=0;j<9;j++){
      plus[j]=alpha[j]
    }
    console.log(plus);
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // let c = test.slice(0,10)

    // this.result = res.data.resultSummary;
    // if (res.status) {
    //   if (this.result.length != 0) {
    //     for (let i = 0; i <= this.result.length; i++) {
    //       this.result[i].oleumAltitu = i;
    //     }
    //   }
    // }
    // console.log(this.result);
  },
  components: {
    NavBarVue,
    PulseLoader,
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
.v-spinner {
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 100px);
}
</style>
