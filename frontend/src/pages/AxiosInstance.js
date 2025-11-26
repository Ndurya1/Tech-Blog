import axios from "axios";

const isDevelopment = process.env.MODE === 'development';
const BASE_URL = isDevelopment ? process.env.REACT_APP_BASE_URL_LOCAL : process.env.REACT_APP_BASE_URL_DEPLOY;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 40000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;