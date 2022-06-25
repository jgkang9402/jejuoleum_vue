<template>
  <div class="visit-parent">
    <ol class="visit-wrap">
      <li
        class="visit-item"
        v-for="(item, idx) in $store.state.visitDiary"
        :key="idx"
      >
        <h4>{{ idx + 1 }}</h4>
        <div class="visit-img-box">
          <img :src="item.imgPath" />
        </div>
        <div class="visit-infobox">
          <h1>{{ item.oleumKname }}</h1>
          <p>{{ item.oleumAddr }}</p>
        </div>
        <p>{{ item.text }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.visitDiary);
  },
};
</script>

<style scoped>
.visit-parent{
  margin: 5vh 0;
}
.visit-wrap {
  width: 90%;
  margin: 0 auto;
}
h4 {
  font-size: 2rem;
  width: 10%;
}
.visit-item {
  display: flex;
  align-items: center;
  text-align: center;
  height: 30vh;
  margin-bottom: 2vh;
  border: 5px double #000;
}
.visit-img-box {
  width: 30%;
  height: 100%;
}
.visit-img-box img {
  width: 100%;
  height: 100%;
}
.visit-infobox{
  width: 30%;
}
</style>
