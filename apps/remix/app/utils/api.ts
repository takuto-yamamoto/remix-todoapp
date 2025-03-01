import axios from 'axios';

const isServer = typeof window === 'undefined';

export const api = axios.create({
  baseURL: isServer ? process.env.API_BASE_URL : window.ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.set('Content-Type', 'application/json');
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
