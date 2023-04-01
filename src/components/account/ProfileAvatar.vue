<template>
    <div class="profile-avatar-container">
        <p>头像</p>
        <p class="avatar" @click="upload">
            <i class="el-icon-camera-solid"></i>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {  },
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

    .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: #ccc 1px solid;
        text-align: center;
        cursor: pointer;
    }
    .el-icon-camera-solid {
        font-size: 30px;
        color: #ccc;
        margin-top: 30px;
    }
}

</style>

