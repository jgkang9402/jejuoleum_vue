<template>
  <div>
    <!-- <ul>
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
    </ul> -->
    <!-- <router-view> -->
      <ListItem
        :pageNationList="pageNationList"
        :result="result"
        :pageNum="pageNum"
        :copied="copied"
      />
    <!-- </router-view> -->
    <ol>
      <li
        v-for="(item, idx) in copied.length"
        :key="idx"
        @click="
          () => {
            // $router.push({ page: `/:page` });
            // pageNation(idx);
          }
        "
      >
        <router-link :to="`/list/${idx}`">
          {{ item }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "ListAll",
  data() {
    return {
      // copyData: [],
      pageNationList: [],
      pageNum: 0,
    };
  },
  props: {
    result: Array,
    copied: Array,
  },
  methods: {
      pageNation(num) {
          console.log(num);
          if (num == num) {
            // console.log("asdasdasdasdasd", this.pageNum);
              this.pageNum = num;
              num = num * 10;
              this.pageNationList = this.result.slice(num, num + 10);
          }
      },
  },
  // mounted() {
  //   this.copyData = this.result;
  //   this.pageNationList = this.result.slice(this.pageNum, 10);
  //   // this.pageNationList.push(this.result.slice(0,9))
  //   console.log(this.pageNationList);
  // },
  components: { ListItem },
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
ol {
  display: flex;
  justify-content: center;
}
ol li {
  margin-right: 10px;
  font-size: 2rem;
  border: 1px solid #000;
}
</style>

<!-- <template>
  <div>
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
    <ol>
      <li
        v-for="(item, idx) in pieces"
        :key="idx"
        @click="() => pageNation(idx)"
      >
        {{ idx + 1 }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ListAll",
  data() {
    return {
      copyData: [],
      pageNationList: [],
      pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      pageNum: 0,
    };
  },
  props: {
    result: Array,
  },
  methods: {
    pageNation(num) {
      console.log(num);
      if (num == num) {
        this.pageNum = num;
        console.log("asdasdasdasdasd", this.pageNum);
        num = num * 10;
        this.pageNationList = this.result.slice(num, num + 10);
      }
    },
  },
  mounted() {
    this.copyData = this.result;
    this.pageNationList = this.result.slice(this.pageNum, 10);
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
ol {
  display: flex;
  justify-content: center;
}
ol li {
  margin-right: 10px;
  font-size: 2rem;
  border: 1px solid #000;
  cursor: pointer;
}
</style> -->
