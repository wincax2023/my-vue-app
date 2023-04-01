<template>
    <div class="profile-section">
        <Profile />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Profile from '../components/account/Profile.vue';

export default {
    components: { Profile },
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
.profile-section {
    width: 100%;
    height: 100%;
    // max-height: 100vh;
    background: #212236;
    color: #fff;
}
</style>

