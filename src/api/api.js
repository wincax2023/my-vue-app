import axios from 'axios';

// eslint-disable-next-line no-undef
var backendUrl = 'http://81.69.44.249:8080';

export const setUrl = url => {
    // eslint-disable-next-line no-undef
    backendUrl = url;
};

/**
 * register
 * @param {*} nickname
 * @param {*} email
 * @param {*} password
 */
export const register = (nickname, email, password) => {
    // eslint-disable-next-line no-undef
    const param = { nickname: nickname, email: email, password: password };

    return axios.post(backendUrl + '/v2/account/register', param, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

/**
 * login
 * @param {*} email
 * @param {*} password
 */

export const login = (email, password) => {
    // eslint-disable-next-line no-undef
    const param = { email: email, password: password };

    return axios.post(backendUrl + '/v2/account/login', param, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// http://81.69.44.249:8080/v1/page/cover/img
/**
 * login
 * @param {string} page login:表示登录页封面图，register:表示注册页封面图
 */

export const getCoverImage = (page = 'login') => {
    // eslint-disable-next-line no-undef
    const param = { page: page };

    return axios.get(backendUrl + '/v1/page/cover/img', {
        params: param,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // return axios.get(cosSetting_loginUrl + interfacePath, {
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8',
    //         'x-access-token': localStorage.getItem('token'),
    //     },
    // });
};

