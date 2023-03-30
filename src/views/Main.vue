<template>
    <div class="main-container">
        <Header />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '../components/header/Header.vue';
export default {
    components: { Header },
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
.main-container {
    width: 100%;
    height: 100%;
    max-height: 100vh;
}
</style>

