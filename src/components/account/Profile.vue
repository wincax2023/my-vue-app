<template>
    <div class="profile-container">
        <img class="banner" src="../../assets/img/profile/banner.png" alt="" />
        <div class="content">
            <p class="avatar-wrapper">
                <img class="avatar" :src="profile.avatar" alt="" />
                <span class="action-wrapper">
                <el-button v-if="isMine" type="text" class="button" @click="edit"><i class="el-icon-edit"></i>编辑</el-button>
                <el-button type="text" class="button" @click="mark"><i class="el-icon-star-on"></i>关注</el-button>
            </span>
            </p>
            
            <h2>提示工程师{{profile.nickname}}</h2>
            <p class="data-wrapper">
                <img class="email" src="../../assets/img/profile/email.png" alt="" />
                <span class="data">{{profile.email}}</span>
                <span class="data">加入时间：{{getJoinTime()}}</span>
            </p>
            <!-- 介绍自己 -->
            <p>
                <el-button v-if="!isMine" type="primary" class="button" @click="mark">关注</el-button>
            </p>
            
            <el-button v-if="!isEdit && isMine" type="text" class="button" @click="introduce">介绍自己</el-button>
            <ProfileEdit v-if="isEdit" @cancel="cancelEdit" />
            <p v-else class="data-wrapper">
                <span class="data">提示 : 0</span>
                <span class="data">喜欢 : 0</span>
                <span class="data">关注 : 0</span>
            </p>
            
        </div>
        <PromptList v-if="!isEdit" />
    </div>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import ProfileEdit from './ProfileEdit.vue';
import PromptList from './PromptList.vue';
export default {
    components: {ProfileEdit , PromptList },
    data() {
        return {
            profile: {
                avatar: require('../../assets/img/profile/avatar.png'),
            },
            isEdit: false,
            isMine: false
        };
    },
    computed: {
        ...mapState("app", ["userInfo"]),
    },
    watch: {
        userInfo(newValue) {
            if (newValue) {
                this.profile = Object.assign({}, this.profile, newValue);
                this.isMine = this.$route.params.id === newValue.uid
                console.warn('profile ', this.profile, newValue);
            } 
        }
    },
    created() {},
    destroyed() {},
    mounted() {
        this.profile = Object.assign({}, this.profile, this.userInfo );
        this.isMine = this.$route.params.id === this.userInfo.uid
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

        introduce() {
            console.log('introduce');
        },
        edit() {
            console.log('edit');
            this.isEdit = !this.isEdit;
        },
        mark() {
            console.log('mark');
        },
        getJoinTime() {
            return this.profile.regTime ? moment(this.profile.regTime).format('LL') : '';
        },
        cancelEdit() {
            this.isEdit = false;
        }
    },
};
</script>

<style lang="less" scoped>
.profile-container {
    width: 100%;
    height: fit-content;
    // color: #fff;
    position: absolute;


    .banner {
        width: 100%;
        height: 170px;
    }

    .content {
        width: 100%;

        .avatar-wrapper {
            position: relative;
            top: -50px;
        }

        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #fff;
            margin: 0 auto;
            display: inline-block;
            border: 1px solid #ccc;
        }
        .el-icon-user-solid {
            font-size: 50px;
            color: #ccc;
            margin-top: 20px;
        }

        .action-wrapper {
            text-align: center;
            display: block;
            float: right;
            position: absolute;
            top: 45px;
            right: 35px;
        }

        .email {
            width: 20px;
            display: inline-block;
            vertical-align: middle;
        }
        
        .data-wrapper {
            .data {
                margin: 0 10px;
            }
        }

        h2 {
            font-size: 24px;
            line-height: 32px;
            margin: 0;
        }

        p {
            font-size: 14px;
            line-height: 24px;
            margin: 0;
        }
    }

}

</style>

