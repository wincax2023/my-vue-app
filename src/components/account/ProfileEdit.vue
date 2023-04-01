<template>
    <div class="profile-edit-container">
        <div class="content">
            <ProfileAvatar /> 
            <ProfileBanner />
            <ProfileIntro />
            <ProfileTool />
            <ProfileWebSite />
            <ProfileNickName />
        </div>

        <div class="footer">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProfileAvatar from './ProfileAvatar.vue';
import ProfileBanner from './ProfileBanner.vue';
import ProfileIntro from './ProfileIntro.vue';
import ProfileTool from './ProfileTool.vue';
import ProfileWebSite from './ProfileWebSite.vue';
import ProfileNickName from './ProfileNickName.vue';

export default {
    components: { ProfileAvatar , ProfileBanner, ProfileIntro, ProfileTool, ProfileWebSite, ProfileNickName},
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

        save() {
            console.log('save');
        },
        cancel() {
            console.log('cancel');
            this.$emit('cancel');
        },

        
    },
};
</script>

<style lang="less" scoped>
.profile-edit-container {
    width: 100%;
    height: fit-content;
    position: absolute;
    font-size: 14px;
    background: #212236;
    padding: 20px 0;

    .content {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0 auto;
        text-align: left;
    }
    .footer {
        width: 427px;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 20px;
    }


    

}

</style>

