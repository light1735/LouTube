<template>
    <div class="home">
        <div v-for="(item, index) in videos" :key="index" class="item">
            <VideoItem :item="item" />
        </div>
        <div class="pagination">
            <el-pagination
                :small="isMobile"
                background
                layout="prev, pager, next"
                :total="90"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script>
import { getList } from "@/api/api";
import { mapState, mapActions, mapGetters } from "vuex";
import VideoItem from "./VideoItem";

export default {
    name: "Home",
    methods: {
        ...mapActions("video", ["getVideo"]),
        handleCurrentChange(page) {
            const items = this.videoGetter.items;
            const start = (page - 1) * this.perPage;
            const end = page * this.perPage;

            if (end > items.length && end <= 100) {
                this.getVideo({ maxResults: 50, pageToken: this.videoGetter.nextPageToken }).then(res => {
                    this.videos = res.items.slice(start, end);
                });
            } else {
                this.videos = items.slice(start, end);
            }
        },
    },
    computed: {
        ...mapGetters("video", { videoGetter: "getVideo" }),
    },
    data() {
        return {
            videos: [],
            perPage: 12,
            isMobile: false,
        };
    },
    mounted() {
        if (!this.videoGetter) {
            this.getVideo({ maxResults: 50 }).then(res => {
                this.videos = res.items.slice(0, this.perPage);
            });
        } else {
            this.videos = this.videoGetter.items.slice(0, this.perPage);
        }

        this.isMobile = window.innerWidth <= 500;
    },
    components: {
        VideoItem,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 500px) {
        justify-content: center;
    }

    .item {
        flex-basis: 21%;
        margin: 8px;
    }

    .pagination {
        width: 100%;
    }
}
</style>
