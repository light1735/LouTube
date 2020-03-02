import API from "../api/config";
import * as Storage from "../utils/storage";
import { StorageKey, getLocal, setLocal } from "@/utils/storage";

const state = {
    video: null,
    collect: getLocal(StorageKey.collectList) || {},
};

const mutations = {
    setVideo(state, payload) {
        if (state.video) {
            state.video.items = [...state.video.items, ...payload.items];
        } else {
            state.video = payload;
        }
    },
    setCollect(state, payload) {
        state.collect[payload.id] = payload.item;
        setLocal(StorageKey.collectList, state.collect);
    },
    removeCollect(state, id) {
        delete state.collect[id];
        setLocal(StorageKey.collectList, state.collect);
    },
};

const actions = {
    getVideo({ commit, getters }, payload) {
        const newPayload = {
            part: "snippet,contentDetails",
            chart: "mostPopular",
            maxResults: "3",
            key: "AIzaSyBmoVBhmmvr4_07vEAOIfosQ-5aVvkJHyk",
            ...payload,
        };

        return API.get("https://www.googleapis.com/youtube/v3/videos", newPayload)
            .then(res => {
                commit("setVideo", res.data);
                return getters.getVideo;
            })
            .catch(err => {
                return Promise.reject(err);
            });
    },
};

const getters = {
    getVideo: state => {
        if (!state.video) {
            return null;
        }
        const payload = {
            nextPageToken: state.video.nextPageToken,
            pageInfo: state.video.pageInfo,
            items: state.video.items,
        };
        return payload;
    },
    getCollect: state => {
        return state.collect;
    },
};

const mock = {
    data: {
        kind: "youtube#videoListResponse",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/kpKs94SyGkq7S7VPFeNY1glEsnM",
        nextPageToken: "CAMQAA",
        pageInfo: {
            totalResults: 200,
            resultsPerPage: 3,
        },
        items: [
            {
                kind: "youtube#video",
                etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/LrF3qbvazDcnXGqKbF0Dq1lRSZc",
                id: "5L6xyaeiV58",
                snippet: {
                    publishedAt: "2020-02-28T05:00:00.000Z",
                    channelId: "UC07Kxew-cMIaykMOkzqHtBQ",
                    title: "Lady Gaga - Stupid Love (Official Music Video)",
                    description:
                        "“STUPID LOVE” ↵THE NEW SINGLE & VIDEO FROM LADY GAGA↵OUT NOW↵http://smarturl.it/StupidLove↵↵Shot entirely on the iPhone 11 Pro↵Directed by Daniel Askill↵↵Listen On @applemusic #ShotOniPhone: http://apple.co/StupidLoveYT↵Listen on Spotify: http://smarturl.it/StupidLove/spotify↵Listen on Amazon: http://smarturl.it/StupidLove/amazonunlimited↵Listen on YouTube Music: http://smarturl.it/StupidLove/youtubemusic↵↵FOLLOW LADY GAGA:↵Facebook: http://gaga.lk/facebook↵Instagram: http://gaga.lk/Instagram↵Snapchat: http://gaga.lk/Snapchat↵Twitter: http://gaga.lk/Twitter↵Website: http://www.ladygaga.com/↵Official Store: http://gaga.lk/GagaStore↵Email List: http://gaga.lk/News↵↵Music video by Lady Gaga performing Stupid Love. © 2020 Interscope Records↵↵http://vevo.ly/5UJ8jb",
                    thumbnails: {
                        default: {
                            url: "https://i.ytimg.com/vi/5L6xyaeiV58/default.jpg",
                            width: 120,
                            height: 90,
                        },
                        medium: {
                            url: "https://i.ytimg.com/vi/5L6xyaeiV58/mqdefault.jpg",
                            width: 320,
                            height: 180,
                        },
                        high: {
                            url: "https://i.ytimg.com/vi/5L6xyaeiV58/hqdefault.jpg",
                            width: 480,
                            height: 360,
                        },
                        standard: {
                            url: "https://i.ytimg.com/vi/5L6xyaeiV58/sddefault.jpg",
                            width: 640,
                            height: 480,
                        },
                        maxres: {
                            url: "https://i.ytimg.com/vi/5L6xyaeiV58/maxresdefault.jpg",
                            width: 1280,
                            height: 720,
                        },
                    },
                    channelTitle: "LadyGagaVEVO",
                    tags: ["Lady", "Gaga", "Stupid", "Love", "Interscope", "Records", "Pop"],
                    categoryId: "10",
                    liveBroadcastContent: "none",
                    localized: {
                        title: "Lady Gaga - Stupid Love (Official Music Video)",
                        description:
                            "“STUPID LOVE” ↵THE NEW SINGLE & VIDEO FROM LADY GA… © 2020 Interscope Records↵↵http://vevo.ly/5UJ8jb",
                    },
                },
                contentDetails: {
                    duration: "PT3M38S",
                    dimension: "2d",
                    definition: "hd",
                    caption: "true",
                    licensedContent: true,
                    regionRestriction: {
                        allowed: Array(246),
                    },
                    projection: "rectangular",
                },
            },
        ],
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
