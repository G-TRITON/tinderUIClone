import axios from 'axios';

const instance = axios.create({baseURL: "https://backend-tinderclone.herokuapp.com"});

export default instance;