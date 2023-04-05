<template>
    <div class="upload-container">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="upload-form">
            <el-form-item prop="model">
                <p><span>模型</span><span class="discription">选择AI提示模型</span></p>
                <el-select v-model="ruleForm.model" placeholder="请选择选择AI提示模型">
                    <el-option v-for="(item, index) in modelList" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="title">
                <p><span>标题</span><span class="discription">为这个提示创建一个吸引人的标题</span></p>
                <el-input v-model="ruleForm.title" placeholder="电影朋克怀旧风格"></el-input>
            </el-form-item>
            <el-form-item prop="desc">
                <p><span>描述</span><span class="discription">描述您的提示对潜在买家的作用，更详细的描述将增加您的销售额。</span></p>
                <el-input 
                    type="textarea" 
                    v-model="ruleForm.desc"             
                    :rows="4"
                    :maxRows="6"
                    placeholder="创建描绘各种职业的可自定义卡通人物的惊人 3D 渲染"
                    resize="none">
                </el-input>
            </el-form-item>
            <el-form-item prop="prompt">
                <p><span>图片提示</span><span class="discription">复制 Midijourney的提示到这里</span></p>
                <el-input 
                    type="textarea" 
                    v-model="ruleForm.desc"             
                    :rows="4"
                    :maxRows="6"
                    placeholder="china, assian, handsome,8K,29,flight suit,black hat,IT man, frontal shot,ultra detailed, ultra realistic,85mm lens,f/1.8,accent"
                    resize="none">
                </el-input>
            </el-form-item>
            <el-form-item prop="title">
                <p><span>价格</span><span class="discription">你认为这个提示的价格应该是多少？</span></p>
                <el-radio-group v-model="ruleForm.priceType">
                    <el-radio label="免费"></el-radio>
                    <el-radio label="收费"></el-radio>
                </el-radio-group>
                <el-input v-if="ruleForm.priceType === '收费'" v-model="ruleForm.title" placeholder="10.00元"></el-input> 
            </el-form-item>
            <el-form-item prop="title">
                <p><span>上传</span><span class="discription">图片上传由该提示生成的示例图，无拼接或编辑，一次最多上传9张</span></p>
                <div class="upload-wrapper">
                        <div
                            class="upload-box"
                            v-for="(item, index) in imageList"
                            :key="index"
                            @click="selectImage(item)">
                            <img v-if="item.url" :src="item.url" alt="">
                            <i v-else class="el-icon-camera-solid"></i>
                        </div>
                </div>
            </el-form-item>
        </el-form>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>


export default {
    components: {  },
    props: {
        
    },
    data() {
        return {
            ruleForm: {
                model: '',
                title: '',
                desc: '',
                price: '',
                priceType: '收费',
                
            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                    { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择选择AI提示模型', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请输入描述', trigger: 'blur' },
                    { min: 8, max: 1024, message: '长度在 3 到 1024 个字符', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入价格', trigger: 'blur' },
                    { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
                ],
                
            },
            modelList: [
                {
                    id: 1,
                    label: 'Midijourney v4.0',
                    value: 'Midijourney v4.0'
                },
                {
                    id: 2,
                    label: '区域二',
                    value: 'beijing'
                }
            ],
            dialogImageUrl: '',
            dialogVisible: false,
            imageList: [
                {
                    id: 1,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 2,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 3,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 4,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 5,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 6,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 7,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 8,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                },
                {
                    id: 9,
                    url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
                }
            ]
        };
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {},
    destroyed() {},
    mounted() {
        
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        selectImage(item) {
            console.log('selectImage')
            if (item.url) {
                this.dialogImageUrl = item.url;
                this.dialogVisible = true;
            }
        },

    },
};
</script>

<style lang="less" scoped>
.upload-container {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    .discription {
        font-size: 12px;
        color: #999;
        margin-left: 10px;
    }

    .upload-form {
        width: 500px;
        margin-top: 20px;
        .el-form-item {
            margin-bottom: 20px;
        }

        .upload-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            .upload-box {
                margin: 0 10px 10px 0;
                width: 150px;
                height: 150px;
                border: 1px dashed #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                background-color: #454566;

                .el-icon-camera-solid {
                    font-size: 28px;
                    color: #ccc;
                }

                img {
                    width: 100%;
                    height: 100%;}
            }
        }
        
    }
}

</style>
<style lang="less">
.upload-form {
    input {
        background-color: #454566;
        color:#fff;
    }
    textarea {
        background-color: #454566;
        color:#fff;
    }
    .el-upload--picture-card {
        background-color: #454566;
        border: 1px dashed #454566;
        color: #454566;
    }
}
</style>


