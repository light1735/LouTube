import axios from 'axios';

const service = axios.create({
    timeout: 10000,
    responseType: 'json',
});

export default {
    async post(url, data) {
        console.log('post url:', url)
        return service({
            method: 'post',
            url,
            data: data
        });
    },

    async get(url, data) {
        console.log('get url', url)
        return service({
            method: 'get',
            url,
            params: data,
        });

    },
}