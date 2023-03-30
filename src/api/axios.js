import axios from "axios";

// import Vue from 'vue';

// Vue.prototype.$axios = axios;

/*请求超时时间*/
axios.defaults.timeout = 60000;

const isJSON = (str) => {
    if (typeof str == "string") {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == "object" && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log("error：" + str + "!!!" + e);
            return false;
        }
    }
    console.log("It is not a string!");
};

//`transformResponse` 在传递给 then/catch 前，允许修改响应数据
axios.defaults.transformResponse = function (data) {
    if (isJSON(data)) {
        return JSON.parse(data);
    }
    return data;
};

// `withCredentials` 表示跨域请求时是否需要使用凭证 默认false
axios.defaults.withCredentials = false;

/*定义允许的响应内容的最大尺寸*/
axios.defaults.maxContentLength = 200000;

/*request拦截器*/
axios.interceptors.request.use(
    function (config) {
        let token = localStorage.getItem("mindary_token");
        if (token) {
            config.headers["x-access-token"] = token;
            config.headers["Content-Type"] = "application/json";
            return config;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

/*response拦截器*/
axios.interceptors.response.use(
    function (resp) {
        return resp;
    },
    function (error) {
        console.log("response interceptors error");
        if (error && error.response && error.response.status === 404) {
            return Promise.reject(error.response.data);
        } else {
            return Promise.reject(error);
        }
    }
);
