<template>
    <div class="Component-SideMenu">
        <div class="menu-button">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="overlay" :class="isShow?'active':'hide'" @click.stop="isShow = !isShow"></div>
        <div
            class="menu"
            :class="[isShow?'active':'',
                                       entry=='right'? 'entry-right':'entry-left']"
            :style="{width: width + '%'}"
            @click.stop="isShow = !isShow"
        >
            <div class="body">
                <div class="item" @click="onClickMenu(router.home)">首頁</div>
                <div class="item" @click="onClickMenu(router.collect)">收藏</div>
            </div>
        </div>
    </div>
</template>

<script>
import Router from "@/router/config";

export default {
    /** 
    * 组件名称
    * @module SideMenu
    * @author light
    * @param 
        width, 菜單寬 (%)
        entry, 從哪邊進入, 預設右邊,  left or right
    * @example
        <SideMenu width="80" entry="left"/>
            自訂內容
        </SideMenu>
   */

    name: "SideMenu",
    props: {
        width: {
            default: "50",
            type: String,
            required: false
        },
        entry: {
            default: "right",
            type: String,
            required: false
        }
    },
    mounted() {},
    data() {
        return {
            isShow: false,
            router: {
                home: Router.home.name,
                collect: Router.collect.name
            }
        };
    },
    computed: {},
    methods: {
        show() {
            this.isShow = !this.isShow;
        },
        onClickMenu(router) {
            this.$router.currentRoute.name !== router &&
                this.$router.push({ name: router });
        }
    }
};
</script>


<style lang="scss">
$menu-z-index: 100;

.Component-SideMenu {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .menu-button {
        color: white;
        font-size: 24px;
    }

    .menu {
        position: fixed;
        height: 100%;
        overflow: hidden;
        top: 0;
        right: 0;
        // bottom: 0;
        background-color: #fff !important;
        z-index: $menu-z-index;
        -webkit-box-shadow: 0 0 16px rgba(55, 55, 55, 0.5);
        box-shadow: 0 0 16px rgba(55, 55, 55, 0.5);
        -webkit-transition: transform 0.4s ease-in-out;
        -o-transition: transform 0.4s ease-in-out;
        transition: transform 0.4s ease-in-out;

        &.entry-right {
            transform: translate3d(110%, 0, 0);
            right: 0;
        }

        &.entry-left {
            transform: translate3d(-110%, 0, 0);
            left: 0;
        }

        &.active {
            transform: translate3d(0%, 0, 0);
        }

        .body {
            display: flex;
            flex-direction: column;

            .item {
                height: 44px;
                border-bottom: 1px #f6f8 solid;
                line-height: 44px;
            }
        }
    }

    .overlay {
        background-color: rgba(55, 55, 55, 0.7);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: $menu-z-index - 1;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        overflow-y: hidden;

        &.show {
            opacity: 1;
        }

        &.hide {
            opacity: 0;
            visibility: hidden;
        }
    }
}
</style>
