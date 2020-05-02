import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  // define set data
  state: {
    count: 0,
  },
  // allows us to get the data
  getters: {
    // ...
    getCount: state => {
      return state.count;
    },
  },

  // mutate, change, alter the current state
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
  },

  // perform actions to envoke mutations
  actions,
});
