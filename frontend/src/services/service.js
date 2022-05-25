import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3333/'
});

export default service;