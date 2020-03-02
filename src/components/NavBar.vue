<template>
    <div id="NavBar">
        <div class="container">
            <div class="logo">
                <span>LouTube</span>
            </div>
            <template v-if="isMobile">
                <div class="sideMenu" @click="onMenuSelect">
                    <Menu ref="menu" />
                </div>
            </template>
            <template v-else>
                <div id="nav" class="menu">
                    <router-link :to="router.home">首頁</router-link>|
                    <router-link :to="router.collect">收藏</router-link>
                </div>
            </template>
        </div>
        <div class="shadow" />
    </div>
</template>

<script>
import Router from "@/router/config";
import Menu from "@/components/SideMenu";

export default {
    data() {
        return {
            isMobile: false,
            router: {
                home: Router.home.path,
                collect: Router.collect.path,
            },
        };
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    methods: {
        onMenuSelect(data) {
            this.$refs.menu.show();
        },
        onResize() {
            this.isMobile = window.innerWidth <= 500;
        },
    },
    beforeDestroy() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, {
                passive: true,
            });
        }
    },
    components: {
        Menu,
    },
};
</script>

<style lang="scss" scoped>
$height-m: 56px;
$height-s: 44px;
$phone-size: 500px;

#NavBar {
    .container {
        width: 100%;
        height: $height-m;
        background-color: gray;
        position: fixed;
        z-index: 10;
        top: 0;

        @media (max-width: $phone-size) {
            height: $height-s;
        }

        .logo {
            font-size: 40px;
            color: red;
            float: left;
            margin-left: 16px;
            height: 100%;

            @media (max-width: $phone-size) {
                float: none;
                font-size: 32px;
                margin-left: 0;
            }
        }

        .menu {
            font-size: 24px;
            height: 100%;
            margin-right: 160px;
            line-height: 56px;

            a:first-child {
                margin-right: 8px;
            }

            a {
                font-weight: bold;
                color: #2c3e50;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }

            @media (max-width: $phone-size) {
                float: right;
            }
        }

        .sideMenu {
            position: fixed;
            top: 4px;
            right: 16px;
        }
    }

    .shadow {
        width: 100%;
        height: $height-m;

        @media (max-width: $phone-size) {
            height: $height-s;
        }
    }
}
</style>
