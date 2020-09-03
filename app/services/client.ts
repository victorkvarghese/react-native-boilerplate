import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/react-dev',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
