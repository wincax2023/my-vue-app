<template>
    <div class="prompt-list-container">
        <PromptCollection :type="type" />
        <p class="line"></p>
        <div class="prompt-list">
            <PromptItem v-for="item in promptList" :key="item.id" :prompt="item" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import {prompts} from '../../mock/prompt'
import PromptItem from './PromptItem.vue'
import PromptCollection from './PromptCollection.vue'
export default {
    components: { PromptItem, PromptCollection },
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
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 10px;

    .line {
        width: 100%;
        height: 1px;
        background-color: #eee;
        margin: 12px 0;
        
    }

    .prompt-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: hidden;
    }
    
}

</style>


