import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api-pop',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
