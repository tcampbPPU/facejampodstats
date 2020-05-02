import axios from "@/axios";

/**
 * @desc Actions for our Vuex state will live here:
 */
export default {
  async getEpisodes({ commit }) {
    commit("SET_BUSY");
    let { data } = await axios.get("/episodes");
    if (data.success) {
      commit("FETCH_EPISODES", data.data);
    }else {
      ERROR
      commit("ERROR", data.error);

    }
    console.log(data);
    commit("UNSET_BUSY");
  },
};
