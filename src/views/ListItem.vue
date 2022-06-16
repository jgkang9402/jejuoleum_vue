<template>
  <div>
    log{{ $route.params.item }}
    <ul>
      <li v-for="(item, idx) in pageNationList" :key="idx">
        <router-link :to="`/detail/${item.oleumAltitu}`" :pageNum="pageNum">
          <img
            v-if="item.oleumAltitu == 46"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832"
          />
          <img v-else :src="item.imgPath" />
          <h1>{{ item.oleumKname }}</h1>
          <p>{{ item.oleumAddr }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  data() {
    return {
      copyData: [],
      pageNationList: [],
      pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      pageNum: 0,
    };
  },

  props: {
    // pageNationList: Array,
    result: Array,
    // pageNum: Number,
  },
  methods: {
    // pageNation(num) {
    //   console.log(num);
    //   if (num == num) {
    //     console.log("asdasdasdasdasd", this.pageNum);
    //     this.pageNum = num;
    //     num = num * 10;
    //     this.pageNationList = this.result.slice(num, num + 10);
    //   }
    // },
  },

  mounted() {
    this.copyData = this.result;
    this.pageNationList = this.copyData.slice(this.pageNum, 10);
    // this.pageNationList.push(this.result.slice(0,9))
    console.log(this.pageNationList);

    console.log(this.result);
    console.log(this.pageNum);
  },
};
</script>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100vw;
}
ul li {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  cursor: pointer;
}
img {
  width: 100%;
}
</style>
