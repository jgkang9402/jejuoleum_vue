<template>
  <div class="detail-parent">
    <!-- <div>{{ $route.params.id }}</div> -->
    <router-link
      :to="`/detail/${$route.params.id}/write`"
    >
      <router-view :writeData="writeData" />
      <button class="add_post">글쓰기</button>
    </router-link>
    <span class="back-btn" @click="back"> 🔙 </span>

    <!-- <img
      v-if="$route.params.id == 46"
      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832"
    />
    <img v-else :src="result[$route.params.id].imgPath" /> -->
    <img :src="result[$route.params.id].imgPath" />
    <h1>{{ result[$route.params.id].oleumKname }}</h1>
    <h4>{{ result[$route.params.id].oleumAddr }}</h4>
    <p>{{ result[$route.params.id].explan }}</p>
    <a
      :href="`https://terms.naver.com/search.naver?query=${
        result[$route.params.id].oleumKname
      }`"
      target="_blank"
    >
      더보기
    </a>
    <SmallMapVue :xy="xy" />
    <div class="empty-box"></div>
  </div>
</template>

<script>
import SmallMapVue from "@/components/SmallMap.vue";
export default {
  name: "DetailView",
  data() {
    return {
      xy: [
        this.result[this.$route.params.id].x,
        this.result[this.$route.params.id].y,
      ],
      writeData: this.result[this.$route.params.id],
    };
  },
  props: {
    result: Array,
    // pageNum:Number,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // console.log(this.$store.getters.pageNum)
    function toTheTop() {
      window.scrollTo({
        top: 0,
      });
    }
    toTheTop();
    console.log(this.writeData);
  },
  components: { SmallMapVue },
};
</script>

<style scoped>
.detail-parent {
  text-align: center;
}
.empty-box {
  margin-bottom: 50px;
}
.back-btn {
  cursor: pointer;
  font-size: 40px;
  position: fixed;
  left: 5px;
  z-index: 1;
}
.detail-parent img {
  width: 50%;
  height: 50%;
}
.add_post {
  position: absolute;
  right: 10%;
  margin-top: 10px;
  cursor: pointer;
}
</style>
