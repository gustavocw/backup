import axios from 'axios';

const api = axios.create({
    baseURL:'https://f2d7-190-89-159-238.sa.ngrok.io/'
});

export default api;
