<template>
    <div class="main-container">
        <!-- <Header /> -->
        <Search />
        <!-- <audio controls>
                <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
        </audio> -->
        <div class="prompt-list-wrapper">
            <PromptList type="Featured Prompts" />
            <PromptList type="Hottest Prompts" />
            <PromptList type="Newest Prompts" />
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// import Header from '../components/header/Header.vue';
import Search from '../components/search/Search.vue';
import PromptList from '../components/prompt/PromptList.vue';
export default {
    components: { Search , PromptList},
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
        // soundListen.listen((hasSound) => {
        //     console.log('soundListen', hasSound);
        // });
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

    .prompt-list-wrapper {
        width: 100%;
        padding-left: 10px;
    }
}
</style>

