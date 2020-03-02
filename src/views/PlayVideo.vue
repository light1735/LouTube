<template>
    <div class="playVideo">
        <!-- <video id="my-video" class="video-js vjs-big-play-centered" /> -->
        <video id="my-player" class="video-js" controls width="600" height="400">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
            <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
            <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
        </video>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import video from "video.js";

export default {
    name: "PlayVideo",
    methods: {},
    computed: {
        ...mapGetters("video", { videoGetter: "getVideo" }),
    },
    data() {
        return {
            videos: [],
        };
    },
    mounted() {
        // const player = videojs("my-video", {
        //     sources: [
        //         {
        //             src: "https://www.youtube.com/watch?v=5L6xyaeiV58",
        //         },
        //     ],
        //     loop: true,
        //     muted: true,
        //     width: "600",
        //     height: "400px",
        //     controls: true,
        // });
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .item {
        flex-basis: 21%;
        margin: 8px;
    }

    .pagination {
        width: 100%;
    }
}
</style>
