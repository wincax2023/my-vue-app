<template>
    <div class="profile-tool-container">
        <p><span>常用工具</span><span>你喜欢使用哪些AI工具或平台？</span></p>
        <el-input
            class="intro"
            placeholder="Please input"
            v-model="textarea">
        </el-input>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {  },
    data() {
        return {
            profile: {
                avatar: require('../../assets/img/profile/avatar.png'),
            },
            textarea:''
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
.profile-tool-container {
    width: fit-content;
    height: fit-content;
    margin-top: 20px;

    .intro {
        width: 427px;
        height: fit-content;
        border: #ccc 1px solid;
        border-radius: 5px;
        background-color: #454566;
        margin-top: 10px;

        
    }

    
}

</style>
<style>
.profile-tool-container input {
    color: #fff !important;
    background: #0000 !important;
    border: none !important;
}
</style>

