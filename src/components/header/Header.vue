<template>
    <div class="header-container">
        <div class="logo-section" @click="main">
            <img src="../../assets/img/logo.png" alt="" />
            <span class="text">PromptSpell</span>
        </div>
        <div class="menu-section">
            <el-menu
                :default-active="activeIndex"
                class="menu"
                mode="horizontal"
                @select="handleSelect"
                background-color="#00000000"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">灵感</el-menu-item>
                <el-menu-item index="2">找工作</el-menu-item>
                <el-menu-item index="3">学习</el-menu-item>
                <el-menu-item index="4">聘请工程师</el-menu-item>
            </el-menu>
        </div>
        <div class="right-section">
            <span class="button" @click="search">
                <i class="el-icon-search"></i>
            </span>
            <span  v-if="isLogin" class="button-wrapper">
                <img class="avatar" :src="avatar" alt=""  @click="profile" />
                <el-button type="primary" class="button" @click="upload">上传</el-button>
            </span>
            <span v-else class="button-wrapper">
                <el-button type="text" class="button" @click="login">登录</el-button>
                <el-button type="primary" class="button" @click="register">创建账号</el-button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { login } from '../../api/api';

export default {
    components: {  },
    data() {
        return {
            activeIndex: '0',
            isLogin: false,
            avatar: require('../../assets/img/profile/avatar.png'),
        };
    },
    computed: {
        ...mapState("app", ["userInfo"]),
    },
    watch: {
        userInfo(newValue) {
            if (newValue) {
                this.isLogin = localStorage.getItem("prompt-token") ? true : false;
                console.warn('header', this.isLogin);
            }
            if (newValue && newValue.avatar) {
                this.avatar = newValue.avatar;
                
            } 
        }
    },
    created() {},
    destroyed() {},
    mounted() {
        this.isLogin = localStorage.getItem("prompt-token") ? true : false;
        console.warn('header', this.isLogin);
        window.addEventListener("storage", () => {
            const tocken = localStorage.getItem("prompt-token");
            console.warn('tocken', tocken);
            if (tocken) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        });
        if (this.isLogin) {
            this.doLogin()
        }
    },
    methods: {
        ...mapActions('app', ['setUserInfo']),

        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        search() {
            console.log('search');
        },
        login() {
            this.$router.push('/login');
        },
        register() {
            this.$router.push('/register');
        },
        main() {
            this.$router.push('/');
        },
        profile() {
            this.$router.push(`/profile/${this.userInfo.uid}`);
        },
        upload() {},
        doLogin() {
            const password = localStorage.getItem("prompt-password")
            const email = localStorage.getItem("prompt-email")
            login(email, password)
            .then(resp => {
                if (resp.data && resp.data.data) {
                    // token
                    localStorage.setItem(
                        'prompt-token',
                        resp.data.token
                    );
                    
                    this.setUserInfo(resp.data.data);
                }
                console.warn('login resp', resp);
            })
            .catch(err => {
                console.error('login err', err);
            });
        },
    },
};
</script>

<style lang="less" scoped>
.header-container {
    width: 100%;
    height: 60px;
    display: flex;
    background: #212236;
    color: #fff;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;

    .logo-section {
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 34px;
            height: 34px;
        }
        .text {
            margin-left: 5px;
        }
    }

    .right-section {
        display: flex;
        justify-content: center;
        align-items: center;

        .button {
            cursor: pointer;
            margin: 0 10px;
            vertical-align: middle;
        }
        .avatar {
            width: 40px;
            height: 40px;
            vertical-align: middle;
            cursor: pointer;
        }
    }

}
</style>

