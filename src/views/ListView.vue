<template>
  <div>
    <ul>
      <li v-for="(item, idx) in result" :key="idx">
        <router-link :to="`/detail/${idx}`">
          <img
            v-if="idx == 46"
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
  name: "ListAll",
  props: {
    result: Array,
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100vw;
}
li {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  cursor: pointer;
}
img {
  width: 100%;
}
</style>
