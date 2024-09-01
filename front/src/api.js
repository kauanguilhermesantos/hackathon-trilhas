import axios from "axios";

const api = axios.create({
  baseURL: "https://hackathon-trilhas-c5dy.onrender.com/",
});

export default api;
