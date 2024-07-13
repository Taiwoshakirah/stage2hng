
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://timbu-get-all-products.reavdev.workers.dev/api",
 
});

export default axiosInstance;