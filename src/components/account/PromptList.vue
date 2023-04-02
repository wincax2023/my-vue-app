<template>
    <div class="prompt-list-container">
        <div class="prompt-list">
            <PromptItem v-for="item in promptList" :key="item.id" :prompt="item" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import {prompts} from '../../mock/prompt'
import PromptItem from './PromptItem.vue'

export default {
    components: { PromptItem },
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            promptList: prompts
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
.prompt-list-container {
    width: 100%;
    // height: 160px;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 40px;

    .prompt-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-x: hidden;
    }
    
}

</style>


