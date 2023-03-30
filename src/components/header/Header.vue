<template>
    <div class="header-container">
        <div class="logo-section">
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
            <span class="button" @click="login">登录</span>
            <el-button type="primary" class="button" @click="register">创建账号</el-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    components: {  },
    data() {
        return {
            activeIndex: 0
        };
    },
    computed: {
        // ...mapState("app", ["curTab", "clientHeight"]),
    },
    watch: {},
    created() {},
    destroyed() {},
    mounted() {
        
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

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
        }
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
        }
    }

}
</style>

