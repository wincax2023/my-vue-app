<template>
    <div class="search-container">
        <img class="banner" src="../../assets/img/banner.png" alt="" />
        <div class="content">
            <h2>
                DALL·E、GPT、Midjourney、Stable Diffusion、ChatGPT
            </h2>
            <h2>
                Prompt Marketplace
            </h2>
            <p class="label">
                查找最佳提示，产生更好的结果，节省 API 成本，销售您自己的提示。
            </p>
            <p>
                提示工程排名第一的网站。通过 Stable Diffusion、Midjourney 等模型搜索数百万 AI 艺术图像......
            </p>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="search-form">
                <el-form-item prop="search" class="search-item">
                    <el-input v-model.number="ruleForm.search" placeholder="Search AI images"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onSearch">Search</el-button>
                </el-form-item>
                
            </el-form>
            <div class="trending-searches">
                <span class="d-lg-inline-block d-none">Search by model</span>

                <a class="model-selection-button mx-1 " href="/stable-diffusion-prompts">
                    <i class="el-icon-search"></i> Stable Diffusion
                </a>      
                <a class="model-selection-button mx-1 " href="/midjourney-prompts">
                    <i class="el-icon-search"></i> Midjourney
                </a>      
                <a class="model-selection-button mx-1 " href="/dall-e-prompts">
                    <i class="el-icon-search"></i> DALL-E
                </a>      
                <a class="model-selection-button mx-1 " href="/chatgpt-prompts">
                    <i class="el-icon-search"></i> ChatGPT
                </a>  
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    components: {  },
    data() {
        return {
            ruleForm: {
                search: ''
            },
            rules: {
                search: [
                    {
                        required: true,
                        message: 'Please input search content',
                        trigger: 'blur',
                    },
                ],
            },
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

        onSearch() {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    // /marketplace?searchQuery=demo&sortBy=score&time=all&model=midjourney
                    this.$router.push(`/marketplace?searchQuery=${this.ruleForm.search}`);
                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        
    },
};
</script>

<style lang="less" scoped>
.search-container {
    width: 100%;
    height: 390px;
    color: #fff;
    background-image: url('../../assets/img/banner-back.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner {
        width: 100%;
        position: absolute;
        top: 0;
        height: 390px;
    }

    .content {
        position: absolute;
        top: 0;
        left: auto;
        width: fit-content;
        height: 390px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 1;


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

        .label {
            
            margin-top: 20px;
        }

        .search-form {
            display: flex;
            margin-top: 20px;
            width: 100%;

            .search-item {
                width: 100%;
            }
        }

        .trending-searches {
            width: 100%;
            text-align: left;
            font-size: 12px;
            a {
                cursor: pointer;
                background: none;
                border: 1px solid rgba(0,0,0,0.1);
                border-radius: 14px;
                // font-size: 14px;
                padding: 1px 8px;
                color: rgba(255, 255, 255, 0.9);
                border-color: rgba(255, 255, 255, 0.9);
                margin: 0 4px;
            }
        }
    }

}
.search-container:before {
    // min-height: var(--header-height);
    height: 390px;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#000,#000);
    opacity: .6;
}
</style>

