<template>
  <div class="write-parent">
    <div class="write-modal">
      <div>{{ $route.params.id }}</div>
      <span class="close-btn" @click="back"> ❌ </span>
      <h1>{{ writeData.oleumKname }}</h1>
      <textarea ref="visitText"></textarea>
      <div class="filebox">
        <input type="file" />
      </div>

      <div>
        <button @click="addVisitDiary">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitData: [],
    };
  },
  props: {
    writeData: Object,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addVisitDiary(e) {
      if (this.$refs.visitText.value == "") {
        e.preventDefault;
        this.$refs.visitText.focus();
        return;
      }
      this.visitData = [
        ...this.visitData,
        {
          ...this.writeData,
          text: this.$refs.visitText.value,
        },
      ];
      console.log(this.visitData);
      this.back();
    },
  },
  mounted() {
    console.log("마운트", this.visitData);
  },
};
</script>

<style scoped>
.write-parent {
  width: 100vw;
  height: 150%;
  background-color: rgba(35, 34, 34, 0.4);
  position: absolute;
  top: 0;
  z-index: 2;
}
.write-modal {
  position: fixed;
  width: 80vw;
  height: 80vh;
  border: 1px solid #000;
  left: 10%;
  top: 10vh;
  background-color: aliceblue;
  cursor: default;
}
h1 {
}
textarea {
  width: 70%;
  height: 70%;
  resize: none;
  font-size: 1.5rem;
}
.close-btn {
  position: absolute;
  /* display: block; */
  cursor: pointer;
  font-size: 2rem;
  right: 5%;
  z-index: 2;
}
</style>
