import axios from "axios";
import { API_URL } from "../../evn";

export const useHttp = axios.create({
    baseURL: API_URL,
    timeout: 1000,
  });