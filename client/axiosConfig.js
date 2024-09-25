import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://coffee.markkravchuk.xyz/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
