import axios from "axios";

const $axios = axios.create({
  baseURL: "/api/v1/",
  // baseURL: "http://localhost:4000/api/v1/",

  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",    
  },
});

export default $axios;
