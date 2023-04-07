<template>
    <div class="profile-avatar-container">
        <p>头像</p>
        <p class="avatar-wrapper" @click="upload">
            <img class="avatar" :src="profile.avatar" alt="" />
            <i class="el-icon-camera-solid"></i>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {  },
    props: {
    },
    data() {
        return {
            profile: {
                avatar: require('../../assets/img/profile/avatar.png'),}
        };
    },
    computed: {
        ...mapState("app", ["userInfo"]),
    },
    watch: {
        userInfo(newValue) {
            if (newValue) {
                this.profile = Object.assign({}, this.profile, newValue);
            } 
        }
    },
    created() {},
    destroyed() {},
    mounted() {
        this.profile = Object.assign({}, this.profile, this.userInfo );
        console.warn('profile', this.profile, this.userInfo);
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

        upload() {}
    },
};
</script>

<style lang="less" scoped>
.profile-avatar-container {
    width: fit-content;
    height: fit-content;

    .avatar-wrapper {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: #ccc 1px solid;
        text-align: center;
        cursor: pointer;
        display: flex;

        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #fff;
            margin: 0 auto;
            display: inline-block;
            border: 1px solid #ccc;
        }
    }
    .el-icon-camera-solid {
        font-size: 30px;
        color: #ccc;
        margin: 35px 0 0 35px;
        position: absolute;
    }
}

</style>

