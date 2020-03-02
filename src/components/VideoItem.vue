<template>
    <div id="VideoItem" :style="{ width: item.snippet.thumbnails.medium.width + 'px' }">
        <div class="img">
            <img :src="item.snippet.thumbnails.medium.url" />
            <!-- :style="{width: item.snippet.thumbnails.medium.width, height: item.snippet.thumbnails.medium.height}" -->
            <div class="duration" v-text="time" />
        </div>
        <div class="body">
            <div class="title" v-text="item.snippet.title" />
            <div class="description" v-text="item.snippet.description" />
            <template v-if="item.isCollect">
                <button class="collect isCollect" @click="didTapCollect(item.id)">已收藏</button>
            </template>
            <template v-else>
                <button class="collect" @click="didTapCollect(item.id)">收藏</button>
            </template>
        </div>
    </div>
</template>

<script>
import { getList } from "@/api/api";
import { StorageKey, getLocal, setLocal } from "@/utils/storage";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment";
import Router from "@/router/config";

export default {
    name: "VideoItem",
    props: {
        item: Object
    },
    data() {
        return {
            video: {},
            time: ""
        };
    },
    methods: {
        ...mapActions("video", ["getVideo"]),
        ...mapMutations("video", ["setCollect", "removeCollect"]),
        formatDuration: duration => {
            const time = moment.duration(duration);
            const format = time._data.hour > 0 ? "H:m:s" : "m:s";
            return moment(time.asMilliseconds()).format(format);
        },
        isCollect(id) {
            if (this.collect && this.collect[id]) {
                return this.collect[id];
            }
            return false;
        },
        didTapCollect(id) {
            if (this.item.isCollect) {
                this.removeCollect(id);
                this.$set(this.item, "isCollect", false);
            } else {
                this.$set(this.item, "isCollect", true);
                this.setCollect({ id: id, item: this.item });
            }
        },
        playVideo(id) {
            this.$router.push({
                name: Router.playVideo.name,
                query: { id: id }
            });
        }
    },
    computed: {
        ...mapGetters("video", ["getCollect"])
    },
    mounted() {
        this.time = this.formatDuration(this.item.contentDetails.duration);
        this.getCollect[this.item.id]
            ? this.$set(this.item, "isCollect", true)
            : this.$set(this.item, "isCollect", false);
        // this.getVideo().then(res => {
        //     this.video = res;
        //     console.log(res);
        // });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#VideoItem {
    display: inline-block;
    line-height: 100%;

    .img {
        position: relative;
        display: inline-block;

        .duration {
            position: absolute;
            font-size: 14px;
            color: white;
            right: 10px;
            bottom: 10px;
            width: 40px;
            height: 20px;
            line-height: 20px;

            background-color: rgba($color: #000000, $alpha: 0.7);
        }
    }

    .body {
        text-align: left;
        height: 110px;

        .title {
            font-size: 16px;
            font-weight: bold;
            margin: 4px;
            overflow: hidden;
            white-space: normal;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .description {
            font-size: 12px;
            color: rgba($color: #000000, $alpha: 0.7);
            overflow: hidden;
            white-space: normal;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .collect {
            width: 60px;
            height: 30px;
            margin: 4px;
            border-radius: 10px;
            background-color: #e8bce9;
            border: none;

            &.isCollect {
                background-color: #c5bbc6;
            }
        }
    }
}
</style>
