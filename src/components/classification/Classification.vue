<template>
    <div class="classification-container">
        <span class="button" v-for="item in classificationList" :key="item.id">
            <el-button type="text">{{item.name}}</el-button>
        </span>
    </div>
</template>

<script>


export default {
    components: {  },
    props: {
        
    },
    data() {
        return {
            // 精选 热门 最新 人像 摄影 时尚 概念艺术 建筑 风景 图标 室内设计 3D渲染 角色
            classificationList: [
                {
                    id: 1,
                    name: '精选',
                    type: '精选'
                }, {
                    id: 2,
                    name: '热门',
                    type: '热门'
                }, {
                    id: 3,
                    name: '最新',
                    type: '最新'
                }, {
                    id: 4,
                    name: '人像',
                    type: '人像'
                }, {
                    id: 5,
                    name: '摄影',
                    type: '摄影'
                }, {
                    id: 6,
                    name: '时尚',
                    type: '时尚'
                }, {
                    id: 7,
                    name: '概念艺术',
                    type: '概念艺术'
                }, {
                    id: 8,
                    name: '建筑',
                    type: '建筑'
                }, {
                    id: 9,
                    name: '风景',
                    type: '风景'
                }, {
                    id: 10,
                    name: '图标',
                    type: '图标'
                }, {
                    id: 11,
                    name: '室内设计',
                    type: '室内设计'
                }, {
                    id: 12,
                    name: '3D渲染',
                    type: '3D渲染'
                }, {
                    id: 13,
                    name: '角色',
                    type: '角色'
                }]

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
        

    },
};
</script>

<style lang="less" scoped>
.classification-container {
    width: 100%;
    height: 30px;
    margin-top: 20px;

    .button {
        margin: 0 10px;

        /deep/ .el-button--text {
            color: #fff;
            font-size: 14px;
        }
    }
    
}

</style>


