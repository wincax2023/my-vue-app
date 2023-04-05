import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/index.vue'),
        meta: { title: 'PromptSpell' },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
        meta: { title: 'Register' },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: { title: 'Login' },
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        meta: { title: 'Profile' },
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/Upload.vue'),
        meta: { title: 'Upload' },
    },
];

const router = new VueRouter({
    // eslint-disable-next-line
    base: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '/',
    mode: 'history',
    routes,
});

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    // if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    console.log(location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => {
        console.log(err);
        return;
    });
};
// replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    console.log(location, onResolve, onReject);
    // if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err);
};

const DEFAULT_TITLE = 'PromptSpell';
router.afterEach(to => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;

