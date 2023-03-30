<template>
    <div class="main-container">
        <Register />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isMobile } from '../lib/util';
import Register from './Register.vue';
export default {
    components: { Register },
    data() {
        return {
            isMobile: isMobile,
        };
    },
    computed: {
        // ...mapState("app", ["curTab", "clientHeight"]),
    },
    watch: {},
    created() {},
    destroyed() {},
    mounted() {},
    methods: {
        ...mapActions('app', ['setMenuIndex']),
    },
};
</script>

<style lang="less" scoped>
.main-container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
}
</style>

