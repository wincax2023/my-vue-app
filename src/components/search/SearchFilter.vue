<template>
    <div class="search-filter-container">
         <el-button type="primary" size="mini" @click="clear">清除过滤器</el-button>
        <div v-for="item in filters" :key="item.id" class="filter-wrapper">
            <p>{{item.type}}</p>
            <el-checkbox-group v-model="checkboxGroup[item.id]" fill="#ffffff">
                <el-checkbox 
                    v-for="child in item.children" 
                    :key="child.id" 
                    :label="child.name" 
                    text-color="#ffffff"
                    @change="onSelect(item.id, child.name)"
                    >
                </el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {searchFilter} from '../../mock/filter.js';
export default {
    components: {  },
    data() {
        return {
            filters: searchFilter,
            checkboxGroup: {1: ['关联'], 2: ['全部'], 3: ['全部']},
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

        onSelect(id, name) {
            this.checkboxGroup[id] = [name];


        },
        clear() {
            this.checkboxGroup = {1: ['关联'], 2: ['全部'], 3: ['全部']}
        }
        
    },
};
</script>

<style lang="less" scoped>
.search-filter-container {
    width: 180px;
    padding: 0 16px;
    text-align: left;
    font-size: 12px;


    .filter-wrapper {
        margin-top: 10px;
    }

    .el-checkbox {
        width: 100%;
    }
    
    
    
}

</style>
<style lang="less">
.search-filter-container {
    .el-checkbox__label {
        font-size: 12px;
    }
}
</style>

