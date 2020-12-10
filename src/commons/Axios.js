import axios from 'axios';
import ApiConfig from './../constants/ApiConstant';

const Axios = axios.create({
    baseURL: ApiConfig.BASE_API,
    headers: {
        'Content-Type': 'application/json'
    }
});

Axios.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('token');
        config.headers['Authorization'] = "Bearer ";
        return config;
    }
);

Axios.interceptors.response.use(
    function (res) {
        if (res.data.state === false)
            return Promise.reject(new Error(res.data.msg));
        return res;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default Axios;