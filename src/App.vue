<template>
    <div id="app" class="app-container">
        <Header />
        <div class="main">
            <router-view> </router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/header/Header.vue';
export default {
    name: 'App',
    components: {Header},
};
</script>
<style lang="less" scoped>
.app-container {
    .main {
        width: 100%;
        height: calc(100% - 60px);
        position: absolute;
    }
}
</style>
<style>
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    overscroll-behavior: none;
    touch-action: manipulation;
    -webkit-touch-callout: none;
    /* padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top); */
    box-sizing: border-box;
    /* min-width: 1024px; */
    overflow: auto;
}
#app {
    font-family: Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    max-width: 100vw;
    background: #212236;
}
* {
    box-sizing: border-box;
}
p {
    margin: 0;
}
a {
    color: #ececec;
    text-decoration: none;
    outline: 0;
}
</style>

