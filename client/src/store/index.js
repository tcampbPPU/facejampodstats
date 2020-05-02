import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";

import Auth from '../middleware/auth'
Vue.use(Vuex);

export default new Vuex.Store({
  // define set data
  state: {
    isBusy: true,
    episodes: [],
    errors: {}

  },
  // allows us to get the data
  getters: {
    episodes: state => state.episodes,
    isBusy: state => state.isBusy,
    errors: state => state.errors,

  },

  // mutate, change, alter the current state
  mutations: {
    FETCH_EPISODES(state, episodes) {
      state.episodes = episodes;
    },    
    SET_BUSY(state) {
      state.isBusy = true;
    },
    UNSET_BUSY(state) {
      state.isBusy = false;
    },  
    ERROR(state, errors) {
      state.errors = errors;
    },     
    CLEAR_ERROR(state, fields) {
      let errors = state.errors;
      _.map(fields, (v, k) => {
        if (_.has(errors, k)) {
          delete errors[k];
        }
      });
      state.errors = errors;
    }     
  },

  // perform actions to envoke mutations
  actions,
  modules: {
    Auth
  }
});
