<template>
    <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login-form-container"
        label-position="top"
    >
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
        <!-- Remember me -->
        <el-form-item>
            <el-checkbox v-model="checked">Remember me</el-checkbox>
            <!-- Forgot your password? -->
            <el-button class="forgot" type="text" @click="forgot">
                Forgot your password?
            </el-button>
        </el-form-item>
        <el-form-item>
            <el-button class="button" type="primary" @click="login('ruleForm')">
                Log in
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { mapActions } from 'vuex';
import { login } from '../api/api';
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
            checked: false,
            ruleForm: {
                email: '', // 'jackma5@gmail.com',
                password: '', // '123456789',
            },
            rules: {
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
            },
        };
    },
    computed: {},
    // 生命周期函数
    mounted() {
        this.ruleForm.email = localStorage.getItem('prompt-email') || '';
        this.ruleForm.password = localStorage.getItem('prompt-password') || '';
        this.checked =
            this.ruleForm.email && this.ruleForm.password ? true : false;
    },
    // 组件方法
    methods: {
        ...mapActions('app', ['setUserInfo']),
        checkEmail() {
            // 检查输入的邮箱是否为新用户
            // 如果是新用户，返回true；否则返回false
        },
        login() {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    // request login
                    const { email, password } = this.ruleForm;
                    login(email, password)
                        .then(resp => {
                            if (resp.data && resp.data.data) {
                                // token
                                localStorage.setItem(
                                    'prompt-token',
                                    resp.data.token
                                );
                                const { email } = resp.data.data;
                                if (this.checked) {
                                    localStorage.setItem('prompt-email', email);
                                    localStorage.setItem(
                                        'prompt-password',
                                        this.ruleForm.password
                                    );
                                } else {
                                    localStorage.setItem('prompt-email', '');
                                    localStorage.setItem('prompt-password', '');
                                }
                                this.setUserInfo(resp.data.data);
                                // email: 'jackma5@gmail.com';
                                // nickname: 'jackma';
                                // regTime: '2023-03-28 22:37:51';
                                // uid: '6422fbbf8560e3c8f2b9b8e7';
                            }
                            console.warn('login resp', resp);
                        })
                        .catch(err => {
                            console.error('login err', err);
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
        forgot() {
            // 跳转到忘记密码页面
        },
    },
};
</script>
<style lang="less" scoped>
.login-form-container {
    width: 100%;
    height: 100%;
    text-align: left;

    .button {
        width: 100%;
    }

    .forgot {
        float: right;
    }
}
</style>

