import axios from "axios";
import router from "../router";

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status
};
const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => status.status,
    user: state => state.user
};
const mutations = {};
const actions = {
    
};

export default {
  state,
  actions,
  mutations,
  getters,
};
