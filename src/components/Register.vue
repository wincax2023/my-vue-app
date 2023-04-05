<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="register-form-container"
        label-position="top"
    >
        <el-form-item label="Full name" prop="name">
            <el-input
                placeholder="Please input full name"
                v-model="ruleForm.name"
                type="text"
            />
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input
                placeholder="Please input email"
                v-model="ruleForm.email"
                type="email"
            />
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input
                placeholder="Please input password"
                v-model="ruleForm.password"
                type="password"
            />
        </el-form-item>
        <!-- <el-form-item v-if="showCode" label="验证码" prop="code">
            <el-input
                placeholder="请输入验证码"
                v-model="ruleForm.code"
                type="text"
            />
        </el-form-item> -->

        <el-form-item>
            <el-button
                class="button"
                type="primary"
                @click="register('ruleForm')"
            >
                Sign Up
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { mapActions } from 'vuex';
import { register, login } from '../api/api';
export default {
    // 组件选项
    components: {},
    props: {},
    data() {
        const validateEmail = (rule, value, callback) => {
            // 邮箱的正则表达式
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (value === '') {
                callback(new Error('Please input email'));
            } else if (!emailRegex.test(value)) {
                callback(new Error('Email format error'));
            } else {
                callback();
            }
        };
        // const validatePass = (rule, value, callback) => {
        //     // 密码的正则表达式，要求至少6位，必须包含数字、大小写英文字母、特殊字符
        //     const passwordRegex =
        //         /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=])(?=.{6,})/;
        //     if (value === '') {
        //         callback(new Error('Please input password'));
        //     } else if (!passwordRegex.test(value)) {
        //         callback(new Error('Password format error'));
        //     } else {
        //         callback();
        //     }
        // };

        return {
            ruleForm: {
                name: '',
                email: '',
                password: '',
                code: '',
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Please input full name',
                        trigger: 'blur',
                    },
                ],
                email: [
                    {
                        required: true,
                        message: 'Please input email',
                        trigger: 'blur',
                    },
                    { validator: validateEmail, trigger: 'blur' },
                ],
                password: [
                    {
                        required: true,
                        message: 'Please input password',
                        trigger: 'blur',
                    },
                    // { validator: validatePass, trigger: 'blur' },
                ],
                // code: [
                //     {
                //         required: true,
                //         message: '请输入验证码',
                //         trigger: 'blur',
                //     },
                // ],
            },
            showCode: false, // 是否需要显示验证码输入框
        };
    },
    computed: {},
    // 生命周期函数
    mounted() {},
    // 组件方法
    methods: {
        ...mapActions('app', ['setUserInfo']),

        checkEmail() {
            // 检查输入的邮箱是否为新用户
            // 如果是新用户，返回true；否则返回false
        },
        register() {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    // request login
                    const { name, email, password } = this.ruleForm;
                    register(name, email, password)
                        .then(resp => {
                            if (resp.data && resp.data.data) {
                                // token
                                // localStorage.setItem(
                                //     'prompt-token',
                                //     resp.data.token
                                // );
                                // email
                                localStorage.setItem('prompt-email', email);

                                this.setUserInfo(resp.data.data);

                                // UID: '6422fbbf8560e3c8f2b9b8e7';
                                // avatar: 'https://img-1257472583.cos.ap-hongkong.myqcloud.com/%E5%A4%B4%E5%83%8F/default.png';
                                // backImageUrl: 'https://img-1300172339.cos.ap-shanghai.myqcloud.com/user/backImageUrl.jpeg';
                                // country: '中国';
                                // email: 'jackma5@gmail.com';
                                // introduce: '写点什么吧！让其他人都能了解你';
                                // inviteCode: 'ZTTYBA';
                                // ip: '114.86.73.99';
                                // nickname: 'jackma';
                                // regTime: '2023-03-28 22:37:51';
                                this.login(email, password)
                                this.$nextTick(() => {
                                    // this.$router.push('/login');
                                    this.$router.push('/');
                                })
                               
                            }
                            console.warn('register resp', resp);
                        })
                        .catch(err => {
                            console.error('register err', err);
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            // 检查输入的邮箱和密码是否正确
            // 如果需要，检查验证码是否正确
            // 如果验证成功，将用户信息存储在localStorage中，然后导航到其他页面
        },
        login(email, password) {
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
.register-form-container {
    width: 100%;
    height: 100%;
    text-align: left;

    .button {
        width: 100%;
    }
}
</style>

