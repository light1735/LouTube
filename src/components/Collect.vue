<template>
    <div class="collect">
        <div v-for="(item, index) in videos" :key="index" class="item">
            <VideoItem :item="item" />
        </div>
    </div>
</template>

<script>
import { getList } from "@/api/api";
import { mapState, mapActions, mapGetters } from "vuex";
import VideoItem from "./VideoItem";

export default {
    name: "collect",
    computed: {
        ...mapGetters("video", ["getCollect"])
    },
    data() {
        return {
            videos: []
        };
    },
    mounted() {
        function* values(obj) {
            for (let prop of Object.keys(obj)) yield obj[prop];
        }
        this.videos = Array.from(values(this.getCollect));
    },
    components: {
        VideoItem
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.collect {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item {
        flex-basis: 21%;
        margin: 8px;
    }
}
</style>
