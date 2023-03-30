export const types = {
    SET_PHONE: 'app/SET_PHONE',
    SET_USER_INFO: 'app/SET_USER_INFO',
};
export default {
    namespaced: true,
    state: {
        phone: '',
        userInfo: {},
    },
    mutations: {
        [types.SET_PHONE](state, phone) {
            state.phone = phone;
        },
        [types.SET_USER_INFO](state, data) {
            state.userInfo = { ...data };
        },
    },
    actions: {
        setPhone({ commit }, phone) {
            commit(types.SET_PHONE, phone);
        },
        setUserInfo({ commit }, data) {
            commit(types.SET_USER_INFO, data);
        },
    },
};

