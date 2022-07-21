<template>
  <PulseLoader v-if="result.length == 0" :size="size" />
  <div id="app" v-else>
    <NavBarVue />
    <router-view class="page" :result="result" :copied="copied" />
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

export default {
  data() {
    return {
      result: [],
      size: "100px",
      copied: [],
    };
  },
  async mounted() {
    const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
    const res = await axios
      .get(`${PROXY}/rest/JejuOleumVRImg/getOleumADetailList`)
      // .get("/rest/JejuOleumVRImg/getOleumADetailList")
      .then((response) => {
        this.result = response.data.resultSummary;
        if (response.status) {
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

    this.result[46].imgPath =
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832";

    let copyArr = new Object(this.result);
    /*
      90개 데이터받아오고
      한객체에 10개씩 순차적 넣고9개의 객체만든다
      만들어진 9개의 객체를 한배열에 넣는다
     */
    let seperateData = [];
    for (let z = 0; z < copyArr.length / 10; z++) {
      seperateData[z] = copyArr.slice(z * 10, z * 10 + 10);
    }
    console.log(seperateData);
    this.copied = seperateData;
    console.log(this.copied[0].length);

    /////////////////////////// 테스트한거
    // let copyArr = this.result;
    // console.log(copyArr);
    // let a = copyArr.slice(0, 10);
    // let b = copyArr.slice(10, 20);
    // let c = copyArr.slice(20, 30);
    // let d = copyArr.slice(30, 40);
    // let e = copyArr.slice(40, 50);
    // let f = copyArr.slice(50, 60);
    // let g = copyArr.slice(60, 70);
    // let h = copyArr.slice(70, 80);
    // let i = copyArr.slice(80, 90);

    // /*
    //   90개 데이터받아오고
    //   한객체에 10개씩 순차적 넣고9개의 객체만든다
    //   만들어진 9개의 객체를 한배열에 넣는다

    //  */

    // let alpha = [a, b, c, d, e, f, g, h, i];
    // // let plus = a.concat(b,c)
    // let plus = [];
    // // plus[0]=a
    // // plus[1]=b
    // // plus[2]=c
    // // console.log(plus);
    // for (let j = 0; j < 9; j++) {
    //   plus[j] = alpha[j];
    // }
    // console.log(plus);
    // this.result2=plus
    ////////////////////

    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // let c = copyArr.slice(0,10)

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
  height: 100%;
  /* background-color: rgba(92, 243, 167, 0.679); */
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
  /* background-image: url('https://www.investkorea.org/images/jj-en/ctn/img_jjlife_ctn0901.jpg'); */
  /* background-image: url('https://thumbs.dreamstime.com/z/traveling-to-asia-jeju-island-landmark-jeolmul-forest-landscape-park-tall-trees-famous-showplace-green-south-korea-219549453.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Pex9Hw263TpFJ7pjJu9K1_wZ08prdbBg0Q&usqp=CAU'); */

  /* background-image: url('https://cdn.pixabay.com/photo/2020/01/18/11/27/forest-4775044_1280.jpg'); */
}

.v-spinner {
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 100px);
}
</style>
