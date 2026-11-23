import axios from "axios";

//console.log(import.meta.env.VITE_CPANEL_API_URL);

const API = axios.create({
  baseURL: `${import.meta.env.VITE_CPANEL_API_URL || import.meta.env.VITE_API_URL || "http://localhost:5000"}/api`,
  withCredentials: true,
});

export default API;
