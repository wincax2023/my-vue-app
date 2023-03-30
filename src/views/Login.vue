<template>
    <div class="login-container">
        <span class="close-button" @click="close">
            <i class="el-icon-close"></i>
        </span>
        <div class="left-section"></div>
        <div class="right-section">
            <div class="logo"></div>
            <h1>Welcome back !</h1>
            <p>Enter to get unlimited access to data & information</p>
            <Login />
            <p class="comment">
                <span>Create a new account </span>
                <el-button type="text" @click="register">Sign up</el-button>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isMobile } from '../lib/util';
import Login from '../components/Login.vue';
import { getCoverImage } from './../api/api';
export default {
    components: { Login },
    data() {
        return {
            isMobile: isMobile,
        };
    },
    computed: {
        // ...mapState("app", ["curTab", "clientHeight"]),
    },
    watch: {},
    created() {},
    destroyed() {},
    mounted() {
        this.getCoverImage();
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

        register() {
            this.$router.push('/register');
        },
        getCoverImage() {
            getCoverImage('login')
                .then(resp => {
                    if (
                        resp.data &&
                        resp.data.data &&
                        resp.data.data.coverImgUrl
                    ) {
                        document.querySelector(
                            '.left-section'
                        ).style.backgroundImage = `url(${resp.data.data.coverImgUrl})`;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        close() {
            this.$router.push('/');
        },
    },
};
</script>

<style lang="less" scoped>
.login-container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;

    .left-section {
        width: 60%;
        height: 100%;
        min-height: 100vh;
        // background-image: url('../assets/img/left-back.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .right-section {
        width: 400px;
        height: 100%;
        background-color: #fff;
        padding: 35px;
        text-align: left;

        .logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-image: url('../assets/img/logo.png');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .comment {
            text-align: center;
        }
    }
    .close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>

