<template>
  <div>
    <ul>
      <li v-for="(item, idx) in copied[$route.params.item]" :key="idx">
        <router-link :to="`/detail/${item.oleumAltitu}`" :pageNum="pageNum">
          <img :src="item.imgPath" />
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
      pageNum: 0,
    };
  },

  props: {
    // pageNationList: Array,
    result: Array,
    copied: Array,
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

<style scoped>
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
