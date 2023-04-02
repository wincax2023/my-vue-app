<template>
    <div class="prompt-collection-container">
        <span class="tile">{{type}}</span>
        <span class="tile"><i class="el-icon-arrow-right"></i></span>
        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    components: {  },
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState("app", ["userInfo"]),
    },
    watch: {
        
    },
    created() {},
    destroyed() {},
    mounted() {
        
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

    },
};
</script>

<style lang="less" scoped>
.prompt-collection-container {
    width: 100%;
    text-align: left;
    color: #fff;
    cursor: pointer;
}

</style>


