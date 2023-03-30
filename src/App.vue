<template>
    <div id="app">
        <router-view> </router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
};
</script>

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

