import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import app from './modules/app';

const store = new Vuex.Store({
    // 严格模式，必须使用 mutations 修改，不能直接复制修改
    strict: true,
    modules: {
        app,
    },
    plugins: [],
});

export default store;

