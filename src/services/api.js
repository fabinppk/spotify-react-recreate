import axios from 'axios';

const api = axios.create({
    baseURL: 'http://spotify-recreate.s3-website-us-east-1.amazonaws.com'
});

export default api;
