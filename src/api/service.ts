import { BASE_URL, ACCESS_KEY } from '@constants/api';
import axios from 'axios';

export const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

apiService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    client_id: ACCESS_KEY,
  };
  return config;
});
