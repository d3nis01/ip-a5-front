import axios from 'axios';

const API_BASE_URL = 'http://localhost:5263/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;
