import axios from "@/axios";

/**
 * @desc Actions for our Vuex state will live here:
 */
export default {
  /**
   * @desc Fetch the all the episodes
   * @param { commit } Mutations
   */
  async getEpisodes({ commit }) {
    commit("SET_BUSY");
    let { data } = await axios.get("/episodes");
    if (data.success) {
      commit("FETCH_EPISODES", data.data);
    } else {
      commit("ERROR", data.error);
    }
    commit("UNSET_BUSY");
  },

  /**
   * @desc Find the requested payload in the state and return its details
   * @param { commit } Mutations
   * @param { payload } episodeNumber
   */
  async getEpisodeDetails({ commit }, payload) {
    commit("SET_BUSY");
    let { data } = await axios.get(`/episode/${payload}`);
    if (data.success) {
      commit("FETCH_EPISODE_BY_NUMBER", data.data[0]);
    }else {
      commit("ERROR", data.error);
    }
    commit("UNSET_BUSY");    
  },
};
