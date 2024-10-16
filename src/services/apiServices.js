import { API_BASE_URL } from "./apiEndpoint";
import axios from "axios";

const apiClient =  axios.create({
    baseURL: API_BASE_URL,
    headers:{
        'Content-Type':'application/json',
    },
});

apiClient.interceptors.request.use(
    function (config){
        // const token = localStorage.getItem('containerProjectAuthToken');
        // console.log('token inside api service', token);
        // if(token){
        //     config.headers.Authorization = `Bearer ${token}`;
        // }

        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);

export default apiClient;