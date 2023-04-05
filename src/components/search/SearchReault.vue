<template>
    <div class="search-result-container">
        <p class="label">相关“{{searchQuery}}”提示</p>
        <p class="line"></p>
        <div class="prompt-list">
            <PromptItem v-for="item in result" :key="item.id" :prompt="item" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {searchResult} from '../../mock/result.js';
import PromptItem from './PromptItem.vue'
export default {
    components: { PromptItem },
    data() {
        return {
            result: searchResult,
            searchQuery: ''
        };
    },
    computed: {
        // ...mapState("app", ["curTab", "clientHeight"]),
    },
    watch: {},
    created() {},
    destroyed() {},
    mounted() {
        this.searchQuery = this.$route.params.searchQuery
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

        
        
    },
};
</script>

<style lang="less" scoped>
.search-result-container {
    width: 100%;
    height: 100%;
    text-align: left;
    
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
        flex-wrap: wrap;
    }

}

</style>

