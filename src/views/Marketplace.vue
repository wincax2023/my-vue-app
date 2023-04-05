<template>
    <div class="marketplace-section">
        <Search />
        <div class="content-wrapper">
            <SearchFilter />
            <SearchReault />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Search from '../components/search/Search.vue';
import SearchFilter from '../components/search/SearchFilter.vue';
import SearchReault from '../components/search/SearchReault.vue';
export default {
    components: { Search, SearchFilter , SearchReault},
    data() {
        return {

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

