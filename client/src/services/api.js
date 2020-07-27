import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mbonilla-igti-final.herokuapp.com/api/',
});

export default api;
