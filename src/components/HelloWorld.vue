<template>
    <div class="hello">
        <VideoItem :item="video.items[0]" />
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,
            <br />check out the
            <a
                href="https://cli.vuejs.org"
                target="_blank"
                rel="noopener"
            >vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener"
                >babel</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                    target="_blank"
                    rel="noopener"
                >router</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                    target="_blank"
                    rel="noopener"
                >vuex</a>
            </li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
            </li>
            <li>
                <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li>
                <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
            </li>
            <li>
                <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-devtools#vue-devtools"
                    target="_blank"
                    rel="noopener"
                >vue-devtools</a>
            </li>
            <li>
                <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/awesome-vue"
                    target="_blank"
                    rel="noopener"
                >awesome-vue</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getList } from "@/api/api";
import { mapState, mapActions, mapGetters } from "vuex";
import VideoItem from "./VideoItem";

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    methods: {
        ...mapActions("video", ["getVideo"])
    },
    data() {
        return {
            video: {}
        };
    },
    mounted() {
        this.video = {
            kind: "youtube#videoListResponse",
            etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/kpKs94SyGkq7S7VPFeNY1glEsnM",
            nextPageToken: "CAMQAA",
            pageInfo: {
                totalResults: 200,
                resultsPerPage: 3
            },
            items: [
                {
                    kind: "youtube#video",
                    etag:
                        "SJZWTG6xR0eGuCOh2bX6w3s4F94/LrF3qbvazDcnXGqKbF0Dq1lRSZc",
                    id: "5L6xyaeiV58",
                    snippet: {
                        publishedAt: "2020-02-28T05:00:00.000Z",
                        channelId: "UC07Kxew-cMIaykMOkzqHtBQ",
                        title: "Lady Gaga - Stupid Love (Official Music Video)",
                        description:
                            "“STUPID LOVE” ↵THE NEW SINGLE & VIDEO FROM LADY GAGA↵OUT NOW↵http://smarturl.it/StupidLove↵↵Shot entirely on the iPhone 11 Pro↵Directed by Daniel Askill↵↵Listen On @applemusic #ShotOniPhone: http://apple.co/StupidLoveYT↵Listen on Spotify: http://smarturl.it/StupidLove/spotify↵Listen on Amazon: http://smarturl.it/StupidLove/amazonunlimited↵Listen on YouTube Music: http://smarturl.it/StupidLove/youtubemusic↵↵FOLLOW LADY GAGA:↵Facebook: http://gaga.lk/facebook↵Instagram: http://gaga.lk/Instagram↵Snapchat: http://gaga.lk/Snapchat↵Twitter: http://gaga.lk/Twitter↵Website: http://www.ladygaga.com/↵Official Store: http://gaga.lk/GagaStore↵Email List: http://gaga.lk/News↵↵Music video by Lady Gaga performing Stupid Love. © 2020 Interscope Records↵↵http://vevo.ly/5UJ8jb",
                        thumbnails: {
                            default: {
                                url:
                                    "https://i.ytimg.com/vi/5L6xyaeiV58/default.jpg",
                                width: 120,
                                height: 90
                            },
                            medium: {
                                url:
                                    "https://i.ytimg.com/vi/5L6xyaeiV58/mqdefault.jpg",
                                width: 320,
                                height: 180
                            },
                            high: {
                                url:
                                    "https://i.ytimg.com/vi/5L6xyaeiV58/hqdefault.jpg",
                                width: 480,
                                height: 360
                            },
                            standard: {
                                url:
                                    "https://i.ytimg.com/vi/5L6xyaeiV58/sddefault.jpg",
                                width: 640,
                                height: 480
                            },
                            maxres: {
                                url:
                                    "https://i.ytimg.com/vi/5L6xyaeiV58/maxresdefault.jpg",
                                width: 1280,
                                height: 720
                            }
                        },
                        channelTitle: "LadyGagaVEVO",
                        tags: [
                            "Lady",
                            "Gaga",
                            "Stupid",
                            "Love",
                            "Interscope",
                            "Records",
                            "Pop"
                        ],
                        categoryId: "10",
                        liveBroadcastContent: "none",
                        localized: {
                            title:
                                "Lady Gaga - Stupid Love (Official Music Video)",
                            description:
                                "“STUPID LOVE” ↵THE NEW SINGLE & VIDEO FROM LADY GA… © 2020 Interscope Records↵↵http://vevo.ly/5UJ8jb"
                        }
                    },
                    contentDetails: {
                        duration: "PT3M38S",
                        dimension: "2d",
                        definition: "hd",
                        caption: "true",
                        licensedContent: true,
                        regionRestriction: {
                            allowed: Array(246)
                        },
                        projection: "rectangular"
                    }
                }
            ]
        };
        // this.getVideo().then(res => {
        //     this.video = res;
        //     console.log(res);
        // });
    },
    components: {
        VideoItem
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
