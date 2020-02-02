import axios from 'axios';

const api = axios.create({
  baseURL: 'http://165.22.38.31:4000',
});

export default api;

// baseURL: 'http://165.22.38.31:4000',
// baseURL: 'http://localhost:4000'
