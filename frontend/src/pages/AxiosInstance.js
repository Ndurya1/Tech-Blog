import axios from "axios";

const isDevelopment = import.meta.env.MODE === 'development';
const BASE_URL = isDevelopment ? import.meta.env.REACT_APP_BASE_URL_LOCAL : import.meta.env.REACT_APP_BASE_URL_DEPLOY;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 40000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;