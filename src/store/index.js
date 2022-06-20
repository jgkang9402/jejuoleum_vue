import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state() {
    return {
      pageNum: 0,
      visitDiary: {},
    };
  },
  getters: {},
  mutations: {
    SET_PAGENUM(state, payload) {
      console.log(state.pageNum);
    },
  },
  actions: {},
});
