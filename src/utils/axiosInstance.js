
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Appid: "X85K3S09EJTDIY5",
    Apikey: "93e826d6ce504f0cbd7a30f97b0649c620240712130840416690",
  },
});

export default axiosInstance;