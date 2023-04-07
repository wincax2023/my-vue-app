<template>
    <div class="profile-banner-container">
        <p>图片的纵横比必须为 2:1，宽度至少为 800 像素</p>
        <p class="banner" @click="upload">
            <img :src="profile.backImageUrl" alt="" />
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
                backImageUrl: require('../../assets/img/profile/banner.png'),}
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
.profile-banner-container {
    width: fit-content;
    height: fit-content;
    margin-top: 20px;

    .banner {
        width: 427px;
        height: 75px;
        border: #ccc 1px solid;
        border-radius: 5px;
        text-align: center;
        background-color: #454566;
        cursor: pointer;
        margin-top: 10px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }
    .el-icon-camera-solid {
        font-size: 30px;
        color: #ccc;
        margin-top: 23px;
        position: absolute;
        left: calc(50% - 15px);
    }
}

</style>

