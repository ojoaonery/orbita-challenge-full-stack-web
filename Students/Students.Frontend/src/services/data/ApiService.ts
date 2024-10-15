import axios from 'axios';

export const ApiService = axios.create({
  baseURL: 'https://localhost:7154/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
