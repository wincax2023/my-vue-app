import './theme/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue';
import moment from 'moment';
moment.locale('zh-cn')

// import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/*全局加载axios拦截器---配置axios的原型链*/
import './api/axios';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

