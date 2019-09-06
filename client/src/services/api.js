import axios from 'axios';

const dev = process.env.REACT_APP_NODE_ENV || 'development';
const domain =
    dev === 'production' ? 'https://spotify-recreate.herokuapp.com:3333' : 'http://localhost:3333';

const api = axios.create({
    baseURL: domain
});

export default api;
