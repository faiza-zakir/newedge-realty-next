import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const API = axios.create({
  baseURL:
    "https://wt51wy62f1.execute-api.us-east-1.amazonaws.com/stagging/api",
  timeout: 60000,
});
export default API;
