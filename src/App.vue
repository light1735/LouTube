<template>
    <div id="app">
        <NavBar />
        <router-view />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Router from "@/router/config";

export default {
    name: "app",
    mounted() {
        this.$router.push({ name: Router.home.name });
    },
    components: {
        NavBar
    }
};
</script>

<style lang="scss">
html,
body {
    height: 100%;
    margin: 0;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}
</style>
