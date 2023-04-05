<template>
    <div class="upload-section">
        <Upload />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Upload from '../components/upload/Upload.vue';

export default {
    components: { Upload },
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
.upload-section {
    width: 100%;
    height: 100%;
    // max-height: 100vh;
    background: #212236;
    color: #fff;
}
</style>

