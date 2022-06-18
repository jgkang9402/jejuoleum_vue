<template>
  <div class="slide-parent">
    <ul>
      <li v-for="(item, idx) in copyData" :key="idx" ref="list">
      <img :src="item.imgPath"></li>
    </ul>
    <button class="prev">◀</button>
    <button class="next">▶</button>
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
  mounted() {
    // console.log(this.result.slice(0, 10));
    this.copyData = this.result.slice(0, 5);
    // this.$refs.list.classList.add='on'
  },
};
</script>

<style scoped>
.slide-parent {
  width: 100vw;
  height: 51vh;
  /* border: 1px solid blue; */
  position: relative;
}
ul {
  border: 1px solid red;
  margin: 0 auto;
  width: 80vw;
  height: 50vh;
  display: flex;
  position: relative;
  /* float: left; */
  /* overflow: hidden; */
}
li {
  /* display: inline-block; */
  border: 1px solid #000;
  position: absolute;
  width: 100%;
  height: 100%;
  color: aqua;
  display: none;
}
li img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.prev, .next {
  position: absolute;
  top: 50%;
}
.prev {
  left: 15%;
}
.next {
  right: 15%;
}
.on{
  display: block;
}
</style>
