import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://localhost:3001/api/' ||
    'https://mbonilla-igti-final.herokuapp.com/api/',
});

export default api;
