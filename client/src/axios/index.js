import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  // baseURL: `${process.env.API_URL}/api/v1/`,

  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",    
  },
});

export default $axios;
