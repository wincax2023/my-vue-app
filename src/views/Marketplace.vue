<template>
    <div class="marketplace-section">
        <Search @search="onSearch" />
        <div class="content-wrapper">
            <SearchFilter @onSelect="onSelect" />
            <SearchReault />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Search from '../components/search/Search.vue';
import SearchFilter from '../components/search/SearchFilter.vue';
import SearchReault from '../components/search/SearchReault.vue';
import { modelMap, sortByMap } from '../lib/constant.js';
export default {
    components: { Search, SearchFilter , SearchReault},
    data() {
        return {
            search: '',
            model: 'all',
            sort: 'relevance',
            tags: 'all',
        };
    },
    computed: {
        // ...mapState("app", ["curTab", "clientHeight"]),
    },
    watch: {},
    created() {},
    destroyed() {},
    mounted() {
        this.search = this.$route.query.searchQuery
    },
    methods: {
        ...mapActions('app', ['setMenuIndex']),

        onSelect(checkboxGroup) {
            console.log('onSelect', checkboxGroup)
            this.sort = sortByMap[checkboxGroup[1]] || 'relevance'
            this.model = modelMap[checkboxGroup[2]] || 'all'
            this.tags = checkboxGroup[3] || 'all'
            // /marketplace?searchQuery=demo&sortBy=relevance&model=all&tags=3d
            this.$router.push(`/marketplace?searchQuery=${this.search}&sortBy=${this.sort}&model=${this.model}&tags=${this.tags}`);
        },
        onSearch(data) {
            const { searchQuery, model } = data;
            this.search = searchQuery
            this.model = model
            this.$router.push(`/marketplace?searchQuery=${this.search}&sortBy=${this.sort}&model=${this.model}&tags=${this.tags}`);
        }
    },
};
</script>

<style lang="less" scoped>
.marketplace-section {
    width: 100%;
    height: 100%;
    // max-height: 100vh;
    background: #212236;
    color: #fff;
    
    .content-wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        padding: 20px 0;

    }
}
</style>

